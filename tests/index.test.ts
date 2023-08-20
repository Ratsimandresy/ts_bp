import type * as AddFunction from "../src/index";

const { add } = jest.requireActual<typeof AddFunction>("../src/index.ts");

describe("Add function", () => {
    test("should return write result", () => {
        const result = add(3, 5);
        const expected = 8;
        expect(result).toBe(expected);
    });
});
