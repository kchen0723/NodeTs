import { Combination } from "../../../algorithm/dp/CombinationAndPermutation/Combination";  

describe("Combination", () => {
    let combination : Combination;

    beforeEach(() => {
        combination = new Combination();
    });

    test("GetCombinationFromUniqueArray", () => {
        var nums = [4, 6, 7, 8];
        var actual = combination.GetCombinationFromUniqueArray(nums, 2);
        expect(actual.length).toBe(6);
    });
})