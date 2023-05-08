const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('push 100 items on empty stack', () => {
    expect(stack.peek()).toBeUndefined();
    for(let i = 1; i<=100; i++) {
        stack.push(i);
    }
    for(let i = 100; i>=0; i--) {
        let item = stack.pop();
        expect(item).toBe(i);
    }
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});


