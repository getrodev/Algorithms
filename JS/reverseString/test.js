const reverse = require('./index'); 

test('Reverse function exits', () => {
    expect(reverse).toBeDefined(); 
}); 

test('Reverse reverses a string', () => {
    expect(reverse('abcd')).toEqual('dcba');
}); 

test('Reverse reverses a string', () => {
    expect(reverse(' abcd')).toEqual('dcba ');
}); 