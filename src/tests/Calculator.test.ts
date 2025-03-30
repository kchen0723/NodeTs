import { Calculator } from "../Calculator ";

describe("calculator", () => {
    let cal: Calculator;

    beforeEach(() => {
        cal = new Calculator();
    });

    test("add 2 nunber", () => {
        var actual = cal.add(3, 5);
        expect(actual).toBe(8);
    });
});