const functions = require('./functions');

// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())

beforeAll(() => initDatabase())
afterAll(() => closeDatabase())

const initDatabase = () => console.log('Database Initailized...')
const closeDatabase = () => console.log('Database Closed...')

test('Adds 2 + 2 = 4',() => {
    expect(functions.add(2, 2)).toBe(4)
} )

test('Should Be null',() => {
    expect(functions.isNull()).toBeNull()
} )

test('Should Be falsy',() => {
    expect(functions.checkValue(0)).toBeFalsy()
} )

test('User Should Be Brad Traversy object',() => {
    expect(functions.createUser()).toEqual({
        firstName:'Brad',
        lastName:'Traversy'
    })
} )

test('Should Be under 1600',() => {
    const load1 = 800;
    const load2 = 700;
    expect(load1+load2).toBeLessThan(1600)
} )

test('There is no I in team',() => {
    expect('team').not.toMatch(/I/i)
} )

test('Admin Should Be in usernames',() => {
    usernames = ['john', 'caren', "admin"];
    expect(usernames).toContain("admin")
} )

test("User fetched name should be Leanne Graham", () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
})

test("User fetched name should be Leanne Graham", async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham')
})