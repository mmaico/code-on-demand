import ScenarioHelper, {scenario} from "../../infratest/scenario_helper.infra";
import {maskProcessorScenarios} from "./mask.processor.scenarios";
import {And, Given, Then, When} from "../../infratest/BDD";
import {MaskProcessor} from "../../../src/mask/processor/mask.processor";

describe('Mask processor', () => {

    beforeAll(async () => {
        await ScenarioHelper.load(maskProcessorScenarios)
    })

    it('should apply mask on cpf and phone', () => {
        Given("A a list of sellers with cpf and phone data")
           const sellers =   scenario('sellers with cpf and email data')
        And('the json path settings')
            const jsonPathSettings = scenario('settings(jsonpath) to mask the cpf and mobile')
        When('the mask process is called')
           const result = new MaskProcessor().process(sellers, jsonPathSettings)
        Then('must return with masked cpf and mobile')
            expect(result).toMatchSnapshot()
    })
})