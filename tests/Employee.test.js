const Employee = require("../lib/Employee");

describe("Employee class", () =>{
  it('should create an object with a name,id,and email',() => {
  const employee = new Employee("Lynn", 34, "lynn@dreamteam.com");
   // needs to equal the correct properties 
   expect(employee.name).toEqual("Lynn");
   expect(employee.id).toEqual(34);
   expect(employee.email).toEqual("lynn@dreamteam.com");
});
});


test("Can instantiate Employee instance", () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe("object");
});



describe("getName", () => {
  it("return this.name from the object", () => {
    const nameInput = "Lynn";
  const employee = new Employee(nameInput);
  expect(employee.getName()).toBe(nameInput);
  });
});


describe("getId", () => {
  it("will return this.id from the object", () => {
  const idInput = 100;
  const employee = new Employee("Tim", idInput);
  expect(employee.getId()).toBe(idInput);
});
});


describe("getEmail", () => {
  it ("will return this.email from the object", () => {
    const emailInput = "tim@dreamteam.com";
    const employee = new Employee("Tim", 36, emailInput);
    expect(employee.getEmail()).toBe(emailInput);
  });
});



describe("getRole", () => {
  it ("should return \"Employee\"", () => {
    const employeeRole = "Employee";
    const employee = new Employee("Emma", 5, "emma@dreamteam.com");
    expect(employee.getRole()).toBe(employeeRole);
  });
});

