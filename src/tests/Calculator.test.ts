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

    test("Calculate a string", () => {
        var actual = cal.Calculate("9-10+11");
        expect(actual).toBe(10);

        actual = cal.Calculate("1+((9-3)*4-10)/(6-4)+1");
        expect(actual).toBe(9);

        actual = cal.Calculate("1+((3*((9-3)*4-10)/(6-4)+1)+2)/3+5");
        expect(actual).toBe(14);
    });
});