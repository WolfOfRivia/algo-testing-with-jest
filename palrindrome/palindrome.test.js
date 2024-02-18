const palindrome = require('./palindrome');

describe('Palindrome', () => {
  it('should be a function', () => {
    expect(typeof palindrome).toEqual('function');
  });
  it('should return a boolean', () => {
    expect(typeof palindrome('hello')).toEqual('boolean');
  });
  it('should return true if string is a palindrome', () => {
    expect(palindrome('racecar')).toBeTruthy();
    expect(palindrome('kayak')).toBeTruthy();
    expect(palindrome('rotator')).toBeTruthy();
  });
  it('should return false if string is not a palindrome', () => {
    expect(palindrome('hello')).toBeFalsy();
    expect(palindrome('world')).toBeFalsy();
    expect(palindrome('bye')).toBeFalsy();
  });
  it('should return false if string includes spaces', () => {
    expect(palindrome(' racecar')).toBeFalsy();
  })
})