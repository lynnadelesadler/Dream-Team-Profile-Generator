const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const githubInput = "GitHubUser";
  const employee = new Engineer("Jackson", 5, "jackson@dreamteam.com", githubInput);
  expect(employee.github).toBe(githubInput);
});


describe("getRole", () => {
  it ("should return \"Engineer\"", () => {
    const employeeRole = "Engineer";
    const employee = new Engineer("Jackson", 5, "jackson@dreamteam.com", "GitHubUser");
    expect(employee.getRole()).toBe(employeeRole);
  });
});


describe("getGithub", () => {
  it ("will return this.github from the object", () => {
    const githubInput = "JacksonDreamteam";
    const employee = new Engineer("Jackson", 5, "jackson@dreamteam.com", githubInput);
    expect(employee.getGithub()).toBe(githubInput);
  });
});


