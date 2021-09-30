import transformNumbers from "../../src/utils/transformNumbers";

describe("transformNumbers", () => {
    it("should sort an array of numbers in ascending order", () => {
        const array = [20, 2, 0.96, 0.7, 5, 18, 1, 0.02, 0.1];

        const result = transformNumbers(array);

        expect(result).toStrictEqual([
            0.02,
            0.1,
            0.7,
            0.96,
            1,
            2,
            5,
            18,
            20
        ])
    });
});