class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getID() {
        return this.id;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;