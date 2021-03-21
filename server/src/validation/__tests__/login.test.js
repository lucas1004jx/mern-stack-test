const mongoose = require('mongoose');

const dbHandler = require('../../utils/db-handler'); 
const User = require('../../models/user');
const validateLoginInput = require('../login');


/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => {
const user = {
email:'test@test.com',
password:'123456'
}
await dbHandler.connect()

});

/**
 * Clear all test data after every test.
 */
afterEach(async () => await dbHandler.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => await dbHandler.closeDatabase());

/**
 * Product test suite.
 */
describe('user login input validation test ', () => {

    it('tests email can not be empty', async () => {
        const data = {
            email:'',
            password:'123456'
        }
        const result = await validateLoginInput(data);
        const expected = {
            errors:['The required field can\'t be empty'],
            isValid:false
        }
        expect(result).toEqual(expected)
    });

    it('tests password can not be empty', async () => {
        const data = {
            email:'test@test.com',
            password:''
        }
        const result = await validateLoginInput(data);
        const expected = {
            errors:['The required field can\'t be empty'],
            isValid:false
        }
        expect(result).toEqual(expected)
    });

    it('tests user not found', async () => {
        const user = {
            userName:'test',
            email:'test@test.com',
            password:'123456'
        }
        const newUser = new User(user);
        await newUser.save();
        
        const data = {
            email:'test1@test.com',
            password:'123456'
        }

        const result = await validateLoginInput(data);
        const expected = {
            errors:['User not exists'],
            isValid:false
        }
        expect(result).toEqual(expected)
    });

    it('tests password is incorrect', async () => {
        const user = {
            userName:'test',
            email:'test@test.com',
            password:'123456'
        }
        const newUser = new User(user);
        await newUser.save();
        
        const data = {
            email:'test@test.com',
            password:'1234567'
        }

        const result = await validateLoginInput(data);
        const expected = {
            errors:['Password incorrect'],
            isValid:false
        }
        expect(result).toEqual(expected)
    });

     it('tests the user input is valid', async () => {
        const user = {
            userName:'test',
            email:'test@test.com',
            password:'123456'
        }
        const newUser = new User(user);
        await newUser.save();
        
        const data = {
            email:'test@test.com',
            password:'123456'
        }

        const result = await validateLoginInput(data);
        const expected = {
            errors:[],
            isValid:true
        }
        expect(result).toEqual(expected)
    });
});
