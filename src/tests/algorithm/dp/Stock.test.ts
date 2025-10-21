import {Stock} from "../../../algorithm/dp/Stock";

describe("Stock", () => {
    let stock : Stock;

    beforeEach(() => {
        stock = new Stock();
    });

    test("maxProfitBuyOnlyOnce", () => {
        var prices = [7, 1, 5, 3, 6, 4];
        var actual = stock.maxProfitBuyOnlyOnce(prices);
        expect(actual).toBe(5);
    });

    test("maxProfitBuyOnlyOnceDp", () => {
        var prices = [7, 1, 5, 3, 6, 4];
        var actual = stock.maxProfitBuyOnlyOnceDp(prices);
        expect(actual).toBe(5);
    });

    test("maxPrifitBuyMultipleTimes", () => {
        var prices = [7, 1, 5, 3, 6, 4];
        var actual = stock.maxPrifitBuyMultipleTimes(prices);
        expect(actual).toBe(7);
    });
})
