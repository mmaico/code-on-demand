import {MaskHolder} from "./mask.holder";

export enum Type { GENERIC, EMAIL }

export interface Formatter {
    apply(data: string, mask: string): string
}


export class GenericFormatter implements Formatter {
    apply(data: string, mask: string): string {
        let treatedData = data.replace(/\*/g, "0").trim()
        let masked = []

        for (let controller = 0, i = 0; i < mask.length; i++) {
            let character = mask.charAt(i)
            if (character === MaskHolder.HASH) {
                masked.push(MaskHolder.getChar(treatedData, controller))
                controller++
            } else {
                masked.push(character)
                controller = character === MaskHolder.STAR ? controller + 1: controller
            }
        }

        return masked.join("")
    }

}

export class EmailFormatter implements Formatter {

    apply(email: string, mask: string): string {
        let masked = []
        let maskTreated = MaskHolder.treatEmailMask(mask)

        for (let controller = 0,  i = 0; i < email.length; i++) {
            let maskCharacter = MaskHolder.getChar(maskTreated, controller);

            if (maskCharacter == MaskHolder.HASH || email.charAt(i) == MaskHolder.AT || MaskHolder.getChar(maskTreated, controller) == email.charAt(i)) {
                if (masked.length < 4 && email.charAt(i) == MaskHolder.AT) {
                    masked.push("******" + email.charAt(i));
                    while(MaskHolder.getChar(maskTreated, controller) != MaskHolder.AT) controller++;
                } else {
                    masked.push(email.charAt(i));
                }
                controller++;
            } else {
                masked.push(MaskHolder.STAR);
                controller = maskCharacter == MaskHolder.STAR ? controller + 1 : controller;
            }
        }

        return masked.join("").trim()
    }

}