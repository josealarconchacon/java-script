const MyArray = require("../arr2.js"); // Import the MyArray class

describe("MyArray Class", () => {
  let arr;

  beforeEach(() => {
    arr = new MyArray();
  });

  test("initializes empty", () => {
    expect(arr.length).toBe(0);
    expect(arr.data).toEqual({});
  });

  test("push() adds items and increases length", () => {
    arr.push("hi");
    arr.push("there");

    expect(arr.length).toBe(2);
    expect(arr.get(0)).toBe("hi");
    expect(arr.get(1)).toBe("there");
  });

  test("get() retrieves correct value", () => {
    arr.push("hi");
    expect(arr.get(0)).toBe("hi");
  });

  test("pop() removes the last item and returns it", () => {
    arr.push("a");
    arr.push("b");

    const popped = arr.pop();
    expect(popped).toBe("b");
    expect(arr.length).toBe(1);
    expect(arr.get(1)).toBeUndefined();
  });

  test("delete() removes item and shifts others", () => {
    arr.push("x");
    arr.push("y");
    arr.push("z");

    const deleted = arr.delete(1);

    expect(deleted).toBe("y");
    expect(arr.length).toBe(2);
    expect(arr.get(0)).toBe("x");
    expect(arr.get(1)).toBe("z");
  });

  test("pop() on empty array returns undefined", () => {
    expect(arr.pop()).toBeUndefined();
  });

  test("delete() on last element results in empty array", () => {
    arr.push("only");
    const deleted = arr.delete(0);
    expect(deleted).toBe("only");
    expect(arr.length).toBe(0);
    expect(arr.data).toEqual({});
  });
});
