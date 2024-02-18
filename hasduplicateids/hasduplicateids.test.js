const hasDuplicateIds = require('./hasduplicateids');

describe('DOM Tree has Duplicate IDs', () => {
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
    // Create mock elements
    const root = document.createElement('div');
    const child1 = document.createElement('div');
    const child2 = document.createElement('div');

    // Append child elements
    root.appendChild(child1);
    root.appendChild(child2);

    // Add duplicate IDs
    root.id = 'root';
    child1.id = 'child';
    child2.id = 'child';

    const result = hasDuplicateIds(root);

    expect(result).toEqual(true);
  });

  it('should return false if there are no duplicate IDs', () => {
    // Create mock elements
    const root = document.createElement('div');
    const child1 = document.createElement('div');
    const child2 = document.createElement('div');

    // Append child elements
    root.appendChild(child1);
    root.appendChild(child2);

    // Add duplicate IDs
    root.id = 'root';
    child1.id = 'child1';
    child2.id = 'child2';

    const result = hasDuplicateIds(root);

    expect(result).toEqual(false);
  });
})