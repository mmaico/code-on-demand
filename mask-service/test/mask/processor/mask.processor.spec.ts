import ScenarioHelper, {scenario} from "../../infratest/scenario_helper.infra";
import {maskProcessorScenarios} from "./mask.processor.scenarios";
import {And, Given, Then, When} from "../../infratest/BDD";
import {MaskProcessor} from "../../../src/mask/processor/mask.processor";

describe('Mask processor', () => {

    beforeAll(async () => {
        await ScenarioHelper.load(maskProcessorScenarios)
    })

    it('should apply mask on cpf and mobile', () => {
        Given("A a list of sellers with cpf and phone data")
           const sellers =   scenario('sellers with cpf and mobile data')
        And('the json path settings')
            const jsonPathSettings = scenario('settings(jsonpath) to mask the cpf and mobile')
        When('the mask process is called')
           const result = new MaskProcessor().process(sellers, jsonPathSettings)
        Then('must return with masked cpf and mobile')
            expect(result).toMatchSnapshot()
    })

    it('should apply mask on cnpj and email', () => {
        Given("A a list of sellers with cnpj and email data")
            const sellers =   scenario('sellers with cnpj and email data')
        And('the json path settings')
            const jsonPathSettings = scenario('settings(jsonpath) to mask the cnpj and email')
        When('the mask process is called')
            const result = new MaskProcessor().process(sellers, jsonPathSettings)
        Then('must return with masked cnpj and email')
            expect(result).toMatchSnapshot()
    })
})