import Scenario from "../../infratest/scenario.infra";

export const maskProcessorScenarios: Scenario[] = [
    {
        description: 'sellers with cpf and email data',
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
        json: [{type: "MOBILE", path: "$.store.sellers[*].phone"}, {type: "CPF", path: "$.store.sellers[*].cpf"}]
    }

]