const { Employee, Manager, Engineer, Intern } = require('./lib/classes.js');

describe('Employee', () => {
    let employee;
    beforeEach(() => {
        employee = new Employee('John', 1, 'John@example.com');
    });

    test('Can create an instance of Employee', () => {
        expect(employee).toBeInstanceOf(Employee);
    });

    test('Can get name of employee', () => {
        expect(employee.getName()).toEqual('John');
    });

    test('Can get id of employee', () => {
        expect(employee.getId()).toEqual(1);
    });

    test('Can get email of employee', () => {
        expect(employee.getEmail()).toEqual('John@example.com');
    });

    test('Can get role of employee', () => {
        expect(employee.getRole()).toEqual('Employee');
    });
});

describe('Manager', () => {
    let manager;
    beforeEach(() => {
        manager = new Manager('John', 1, 'John@example.com', '001');
    });

    test('Can create an instance of Manager', () => {
        expect(manager).toBeInstanceOf(Manager);
    });

    test('Can get role of manager', () => {
        expect(manager.getRole()).toEqual('Manager');
    });

    test('Can get office number of manager', () => {
        expect(manager.officeNumber).toEqual('001');
    });
});

describe('Engineer', () => {
    let engineer;
    beforeEach(() => {
        engineer = new Engineer('Kate', 2, 'Kate@example.com', 'Kate');
    });

    test('Can create an instance of Engineer', () => {
        expect(engineer).toBeInstanceOf(Engineer);
    });

    test('Can get role of engineer', () => {
        expect(engineer.getRole()).toEqual('Engineer');
    });

    test('Can get github username of engineer', () => {
        expect(engineer.github).toEqual('Kate');
    });
});

describe('Intern', () => {
    let intern;
    beforeEach(() => {
        intern = new Intern('Kim', 3, 'Kim@example.com', 'UC Berkey');
    });

    test('Can create an instance of Intern', () => {
        expect(intern).toBeInstanceOf(Intern);
    });

    test('Can get role of intern', () => {
        expect(intern.getRole()).toEqual('Intern');
    });

    test('Can get school of intern', () => {
        expect(intern.school).toEqual('UC Berkey');
    });
});
