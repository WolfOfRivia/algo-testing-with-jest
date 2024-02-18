// Running these test agains however this time with the DRY Principle using hooks
const hasDuplicateIds = require('./hasduplicateids');

describe('DOM Tree has Duplicate IDs', () => {
  let root;
  beforeEach(() => {
    console.log('beforeEach ran...');
    // Create mock elements
    root = document.createElement('div');
    const child1 = document.createElement('div');
    const child2 = document.createElement('div');

    // Append child elements
    root.appendChild(child1);
    root.appendChild(child2);
  });
  afterEach(() => {
    console.log('afterEach ran...');
    root = null;
  });
  it('should be a function', () => {
    expect(typeof hasDuplicateIds).toEqual('function');
  });

  it('should return a boolean', () => {
    expect(typeof hasDuplicateIds()).toEqual('boolean');
  });

  it('should return false if no root element', () => {
    expect(hasDuplicateIds()).toBeFalsy();
  });

  it('should return true if there are duplicate IDs', () => {

    // Add duplicate IDs
    root.id = 'root';
    root.children[0].id = 'child';
    root.children[1].id = 'child';

    const result = hasDuplicateIds(root);

    expect(result).toEqual(true);
  });

  it('should return false if there are no duplicate IDs', () => {

    // Add duplicate IDs
    root.id = 'root';
    root.children[0].id = 'child1';
    root.children[1].id = 'child2';

    const result = hasDuplicateIds(root);

    expect(result).toEqual(false);
  });
})