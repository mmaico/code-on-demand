export class MaskHolder {
    public static readonly HASH: string = "#"
    public static readonly STAR: string = "*"
    public static readonly AT: string = "@"

    public static getChar(value: string, index: number): string {
        return index > (value.length - 1) ? MaskHolder.STAR : value.charAt(index)
    }

    public static treatEmailMask(mask: string) {
        let masked = []

        for (let i = 0; i < mask.length; i++) {
            let c1 = mask.charAt(i);

            if (c1 == MaskHolder.HASH) {
                masked.push(mask.charAt(i));
            } else if (c1 == MaskHolder.STAR && mask.charAt(i -1) == MaskHolder.HASH) {
                masked.push(MaskHolder.STAR);
            } else if (c1 != MaskHolder.STAR) {
                masked.push(mask.charAt(i));
            }
        }
        return masked.join("")
    }
}