
import {EmailFormatter, GenericFormatter} from "./mask/mask.formatter";
import {MaskProcessor, Setting} from "./mask/mask.processor";

String.prototype.includes = function(value) {
    return value.indexOf(this) > 0
}


interface IHomer {
    name(): String;
}

//https://github.com/JSONPath-Plus/JSONPath/issues/163
export class Homer implements IHomer {
    name(){

        const json = {
            store: {
                book: [
                    {
                        category: "reference",
                        author: "Nigel Rees",
                        title: "Sayings of the Century",
                        price: 8.95
                    },
                    {
                        category: "fiction",
                        author: "Evelyn Waugh"
                    }
                ]
            }
        };

        // const json = {
        //     name: "Marcelo Maico"
        // }

    //    let result = jsonpath.JSONPath({json, path: '$.store.book[*].category', resultType: 'all'})
        //let result = jsonpath.JSONPath({json, path: '$.name', resultType: 'all'})
         //let result = "{}"
        //  let teste = JSON.parse(JSON.stringify(result)) as Array<any>
        //
        //
        // teste.forEach(value => {
        //     let match = value.path.match(/\[[^\]]*]/g);
        //     let name = match[match.length - 1].replace(/\[|\]|'/g, "")
        //     value.parent[name] = 20
        //     //console.log(JSON.stringify(value.parent))
        // })
       // console.log("############################################################################")
       // return typeof result + " teste" + JSON.stringify(result);
        return new GenericFormatter().apply("11987638763", "(##)*****-####") + new EmailFormatter().apply("tyrion.lannister@yahoo.com.br", "##*****@#***.###.##")
    }
}

//console.log(new Homer().name())

export default function show() {
    let homer = new Homer();
    return homer.name();
}

const instance = new Homer();
//console.log(new GenericFormatter().apply("11987638763", "(##)*****-####"))

const json = {
    store: {
        book: [
            {
                phone: "11987638765",
                email: "mmaico@gmail.com",

            },
            {
                phone: "11956194823",
                email: "geisa.lima@hotmail.com"
            }
        ]
    }
};

let result = new MaskProcessor().process(json, [new Setting("GENERIC", "$.store.book[*].phone", "(##)*****-####"),
    new Setting("EMAIL", "$.store.book[*].email", "##*****@#***.###.##")])
console.log(result)
