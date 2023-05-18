import {Type} from "./formatter/mask.formatter";


export class MaskDefault {

    public static masks = new Map<Type, string>([
        [Type.CPF, "###.###.***-**"],
        [Type.CNPJ, "**.***.***/****-##"],
        [Type.MOBILE, "(##)**###-####"],
        [Type.EMAIL, "#######@#***.###.##"]
    ])
}