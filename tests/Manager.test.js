const Manager = require("../lib/Manager");


test("Can set office number via constructor argument", () => {
  const testValue = 8607140000;
  const employee = new Manager("Joanne", 66, "joanne@dreamteam.com", testValue);
  expect(employee.officeNumber).toBe(testValue);
});

describe("getRole", () => {
  it ("should return \"Manager\"", () => {
    const employeeRole = "Manager";
    const employee = new Manager("Joanne", 66, "joanne@dreamteam.com", 8607140000);
    expect(employee.getRole()).toBe(employeeRole);
  });
});


describe("getOfficeNumber", () => {
  it ("will return this.officeNumber from the object", () => {
    const officeNumberInput = 8607140000;
    const employee = new Manager("Joanne", 66, "joanne@dreamteam.com", officeNumberInput);
    expect(employee.getOfficeNumber()).toBe(officeNumberInput);
  });
});

