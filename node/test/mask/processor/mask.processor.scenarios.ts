import Scenario from "../../infratest/scenario.infra";

export const maskProcessorScenarios: Scenario[] = [
    {
        description: 'sellers with cpf and mobile data',
        json: {
            store: {
                sellers: [
                    {
                        name: "Jaime Lannister",
                        cpf: "92170410090",
                        mobile: "11987569852",
                        email: "jlannister@got.com"
                    },
                    {
                        name: "Sansa Stark",
                        cpf: "10782412017",
                        mobile: "11932547896",
                        email: "sstark@got.com"
                    }
                ]
            }
        }
    },
    {
        description: 'settings(jsonpath) to mask the cpf and mobile',
        json: [{type: "MOBILE", path: "$.store.sellers[*].mobile"}, {type: "CPF", path: "$.store.sellers[*].cpf"}]
    },
    {
        description: 'sellers with cnpj and email data',
        json: {
            store: {
                sellers: [
                    {
                        name: "Lannisters s/a",
                        cnpj: "10910585000110",
                        mobile: "118857454",
                        email: "support@lennisters.com"
                    },
                    {
                        name: "Starks s/a",
                        cnpj: "85463285000155",
                        mobile: "118849948",
                        email: "support@starks.com"
                    }
                ]
            }
        }
    },
    {
        description: 'settings(jsonpath) to mask the cnpj and email',
        json: [{type: "CNPJ", path: "$.store.sellers[*].cnpj"}, {type: "EMAIL", path: "$.store.sellers[*].email"}]
    },

]