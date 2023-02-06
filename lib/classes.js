class Employee {
    constructor(name, id, email) {
        this.name = name.trim();
        this.id = String(id).trim();
        this.email = email.trim();
    }

    getName() {
        return this.name;
    }

    getId() {
        return Number(this.id);
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber.trim();
    }

    getRole() {
        return 'Manager';
    }
}

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github.trim();
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school.trim();
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = {Employee, Manager, Engineer, Intern}