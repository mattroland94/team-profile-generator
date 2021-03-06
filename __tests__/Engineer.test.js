const { it, expect } = require('@jest/globals');
const { describe } = require('yargs');
const Engineer = require('../lib/Engineer');

const engineerTest = new Engineer ('Meagan', 'meagan@gmail.com', 4, 'Engineer', 'mattroland94')

describe("Engineer", () => {
    it('has a name', () => {
        expect(engineerTest.name).toEqual(expect.any(String))
        expect(engineerTest.name.length).toBeGreaterThan(2)
    })

    it('has an email id', () =>{
        expect(engineerTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has an id that is a num', () => {
        expect(engineerTest.id).toEqual(expect.any(Number))
    })

    it('has a role of engineer', () => {
        expect(engineerTest.role).toBe('Engineer')
    })

    it('has a github username', () => {
        keys = Object.keys(engineerTest)
        optionKey = keys[4]
        expect(optionKey).toBe('gitHub')
        expect(engineerTest.gitHub).toEqual(expect.any(String))
    })
})