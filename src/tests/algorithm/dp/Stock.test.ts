import {Stock} from "../../../algorithm/dp/Stock";

describe("Stock", () => {
    let stock : Stock;

    beforeEach(() => {
        stock = new Stock();
    });

    test("maxProfit", ()=> {
        var prices = [7, 1, 5, 3, 6, 4];
        var actual = stock.maxProfitBuyOnlyOnce(prices);
        expect(actual).toBe(5);
    })
})
