import {MaskProcessor} from "./mask/processor/mask.processor";

String.prototype.includes = function(value) {
    return value.indexOf(this) > 0
}

export default function mask(json: string, settings: string): string {
    let result = new MaskProcessor().process(JSON.parse(JSON.stringify(json)), JSON.parse(JSON.stringify(settings)))
    return JSON.parse(result).value;
}


