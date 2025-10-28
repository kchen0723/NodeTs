import {BagMax} from "../../../algorithm/dp/BagMax";  

describe("BagMax", () => {
    let bagMax : BagMax;

    beforeEach(() => {
        bagMax = new BagMax();
    });

    test("GetMaxProfitForWeightByBackTracking", () => {
        var nums = [[2, 6], [2, 3], [6, 5], [5, 4], [4, 6]];
        var actual = bagMax.GetMaxProfitForWeightByBackTracking(nums, 10);
        expect(actual).toBe(15);
    });

    test("GetMaxProfitForWeightDpDp", () => {
        var nums = [[2, 6], [2, 3], [6, 5], [5, 4], [4, 6]];
        var actual = bagMax.GetMaxProfitForWeightDpDp(nums, 10);
        expect(actual).toBe(15);
    });
})