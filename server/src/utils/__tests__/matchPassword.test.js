const bcrypt = require('bcryptjs');
const matchPassword = require('../matchPassword');

describe('Test matchPassword function',()=>{

it('tests password should match',async()=>{
    const hash = await bcrypt.hash('123456',10);
    const inComingPassword = '123456';
    const match = await matchPassword(inComingPassword,hash);
    expect(match).toBe(true);
})

it('tests password should not match',async()=>{
    const hash = await bcrypt.hash('12345678',10);
    const inComingPassword = '123456';
    const match = await matchPassword(inComingPassword,hash);
    expect(match).toBe(false);
})

})