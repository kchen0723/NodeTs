import { MoveZeroToEnd } from "../../algorithm/MoveZeroToEnd";

describe("MoveZeroToEnd", () => {
    let mze : MoveZeroToEnd;

    beforeEach(() => {
        mze = new MoveZeroToEnd();
    });

    test("MoveZeroToEnd", () => {
        var arr = [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0];
        mze.Move(arr);
        expect(arr).toEqual([1, 10, 2, 8, 3, 6, 4, 5, 7, 0,0,0,0,0]);
    });
})