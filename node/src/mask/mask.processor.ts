import jsonpath = require('../jsonpath');
import {EmailFormatter, Formatter, GenericFormatter, Type} from "./mask.formatter";

export class MaskProcessor {

    private formatters: Map<Type, Formatter> = new Map<Type, Formatter>([
        [Type.GENERIC, new GenericFormatter()],
        [Type.EMAIL, new EmailFormatter()]
    ])

    process(json: any, settings: Setting[]): string {
        settings.forEach(setting => {
            let result = (jsonpath.JSONPath({json, path: setting.path, resultType: 'all'}) as Array<any>)
            result.forEach(field => {
                let type: Type = Type[setting.type]
                field.parent[field.parentProperty] = this.formatters.get(type).apply(field.value, setting.mask)
            })
        })

        return JSON.stringify(json)
    }

}

export class Setting {
    constructor(public type: string, public path: string, public mask: string) {

    }
}