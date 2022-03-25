import {MaskProcessor} from "./mask/processor/mask.processor";

String.prototype.includes = function(value) {
    return value.indexOf(this) > 0
}

export default function show(json: any, settings: any): string {
    let result = new MaskProcessor().process(JSON.parse(json), JSON.parse(settings))
    return result;
}

