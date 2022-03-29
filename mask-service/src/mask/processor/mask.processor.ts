import * as jsonpath from '../../../lib/jsonpath';

import {MaskDefault} from "../mask.default";
import {EmailFormatter, Formatter, GenericFormatter, Type} from "../formatter/mask.formatter";

export class MaskProcessor {

    private formatters: Map<Type, Formatter> = new Map<Type, Formatter>([
        [Type.CPF, new GenericFormatter()],
        [Type.CNPJ, new GenericFormatter()],
        [Type.MOBILE, new GenericFormatter()],
        [Type.EMAIL, new EmailFormatter()]
    ])

    process(json: any, settings: Setting[]): string {
        settings.forEach(setting => {
            let result = (new jsonpath.JSONPath({json, path: setting.path, resultType: 'all'})) as unknown as Array<any>

            result.forEach(field => {
                let type: Type = Type[setting.type]
                field.parent[field.parentProperty] = this.formatters.get(type).apply(field.value, MaskDefault.masks.get(type))
            })
        })
        return JSON.stringify(json)
    }

}

export class Setting {
    constructor(public type: string, public path: string) {

    }
}