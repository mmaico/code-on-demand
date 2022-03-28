import Scenario from './scenario.infra'

export const scenario = (description: string): any => {
    const result = ScenarioHelper.scenarios.find(item => item.description === description)

    if (result == null || result === undefined) {
        throw new Error(`The scenario [${description}] not found in [${JSON.stringify(ScenarioHelper.scenarios)}]`)
    }

    return result.json
}

export default class ScenarioHelper {

    static scenarios: Scenario[] = []

    constructor(scenarios: Scenario[]) {
        ScenarioHelper.scenarios = scenarios
    }

    static load(scenarios: Scenario[]): void {
        this.scenarios = this.scenarios.concat(scenarios)
    }
}
