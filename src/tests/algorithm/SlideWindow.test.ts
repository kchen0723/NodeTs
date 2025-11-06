import { SlideWindow } from "../../algorithm/SlideWindow";

describe("testMinCover", () => {
    let sw : SlideWindow;

    beforeEach(() => {
        sw = new SlideWindow();
    });

    test("GetMinCover", () => {
        var actual = sw.GetMinCover("GetMinCover", "Mov");
        expect(actual).toEqual("MinCov");
    });
});