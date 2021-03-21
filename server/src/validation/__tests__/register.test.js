const mongoose = require('mongoose');

const dbHandler = require('../../utils/db-handler'); 
const User = require('../../models/user');
const validateRegisterInput = require('../register');


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
describe('user register input validation test ', () => {

 it('tests user name can not be empty', async () => {
        const data = {
            userName:'',
            email:'test@test.com',
            password:'123456',
            confirmedPassword:'123456'
        }
        const result = await validateRegisterInput(data);
        const expected = {
            errors:['The required field can\'t be empty'],
            isValid:false
        }
        expect(result).toEqual(expected)
    });

    it('tests email can not be empty', async () => {
        const data = {
            userName:'test',
            email:'',
            password:'123456',
            confirmedPassword:'123456'
        }
        const result = await validateRegisterInput(data);
        const expected = {
            errors:['The required field can\'t be empty'],
            isValid:false
        }
        expect(result).toEqual(expected)
    });

    it('tests password can not be empty', async () => {
        const data = {
            userName:'test',
            email:'test@test.com',
            password:'',
            confirmedPassword:'123456'
        }
        const result = await validateRegisterInput(data);
        const expected = {
            errors:['The required field can\'t be empty'],
            isValid:false
        }
        expect(result).toEqual(expected)
    });

    it('tests comfirmed password can not be empty', async () => {
        const data = {
            email:'test@test.com',
            password:'123456',
            confirmedPassword:''
        }
        const result = await validateRegisterInput(data);
        const expected = {
            errors:['The required field can\'t be empty'],
            isValid:false
        }
        expect(result).toEqual(expected)
    });

    it('tests email is not valid', async () => {
        const data = {
            userName:'test',
            email:'test@test',
            password:'123456',
            confirmedPassword:'123456'
        }
        const result = await validateRegisterInput(data);
        const expected = {
            errors:['The email is not valid'],
            isValid:false
        }
        expect(result).toEqual(expected)
    });

    it('tests the password should at least have 6 characters', async () => {
        const data = {
            userName:'test',
            email:'test@test.com',
            password:'1234',
            confirmedPassword:'1234'
        }
        const result = await validateRegisterInput(data);
        const expected = {
            errors:['The password should at least have 6 characters'],
            isValid:false
        }
        expect(result).toEqual(expected)
    });

    it('tests the password doesn\'t match', async () => {
        const data = { 
            userName:'test',
            email:'test@test.com',
            password:'123456',
            confirmedPassword:'12345678'
        }
        const result = await validateRegisterInput(data);
        const expected = {
            errors:['Password doesn\'t match'],
            isValid:false
        }
        expect(result).toEqual(expected)
    });

    it('tests user already exists', async () => {
        const user = {
            userName:'test',
            email:'test@test.com',
            password:'123456',
        }
        const newUser = new User(user);
        await newUser.save();
        
        const data = {
            userName:'test',
            email:'test@test.com',
            password:'123456', 
            confirmedPassword:'123456'
        }

        const result = await validateRegisterInput(data);
        const expected = {
            errors:['User already exists'],
            isValid:false
        }
        expect(result).toEqual(expected)
    });


     it('tests the user input is valid', async () => {
       
        const data = {
            userName:'test',
            email:'test@test.com',
            password:'123456',
            confirmedPassword:'123456'
        }

        const result = await validateRegisterInput(data);
        const expected = {
            errors:[],
            isValid:true
        }
        expect(result).toEqual(expected)
    });
});
