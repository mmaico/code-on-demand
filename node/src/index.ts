


import  jsonpath  = require('./jsonpath')


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

        let result = jsonpath.JSONPath({json, path: '$.store.book[*].category', resultType: 'all'})
        //console.log(`${result}`)
        let teste = JSON.parse(JSON.stringify(result)) as Array<any>
        teste.forEach(value => {
            value.parent['category'] = 20
            console.log(value.path)
            console.log(JSON.stringify(value.parent))
        })
       // console.log(JSON.parse(JSON.stringify(result)))
        return typeof result + " teste" + JSON.stringify(result);
    }
}

//console.log(new Homer().name())

export default function show() {
    let homer = new Homer();
    return homer.name();
}

const instance = new Homer();
console.log(instance.name());