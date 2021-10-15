const { it, expect } = require('@jest/globals');
const { describe } = require('yargs');
const Employee = require('../lib/Employee');

const employeeTest = new Employee("Matt", "mattroland94@gmail.com", 4, "Employee");

describe('Employee', () => {
    it('has a name', () => {
        expect(employeeTest.name).toEqual(expect.any(String))
        expect(employeeTest.name.length).toBeGreaterThan(2)
    })

    it('has an email id', () => {
        expect(employeeTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has an id that is a num', () => {
        expect(employeeTest.id).toEqual(expect.any(Number))
    })

    it('has a role of employee', () => {
        expect(employeeTest.role).toBe('Employee')
    })
})