const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const schoolInput = "UCONN";
  const employee = new Intern("Brad", 5, "brad@dreamteam.com", schoolInput);
  expect(employee.school).toBe(schoolInput);
});

describe("getRole", () => {
  it ("should return \"Intern\"", () => {
    const employeeRole = "Intern";
    const employee = new Intern("Adelynn", 7, "adelynn@dreamteam.com", "UCONN");
    expect(employee.getRole()).toBe(employeeRole);
  });
});


describe("getSchool", () => {
  it ("will return this.school from the object", () => {
    const schoolInput = "UCONN";
    const employee = new Intern("Brad", 5, "brad@dreamteam.com", schoolInput);
    expect(employee.getSchool()).toBe(schoolInput);
  });
});

