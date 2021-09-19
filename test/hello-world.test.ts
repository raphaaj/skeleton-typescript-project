import { HelloWorld } from '../src/hello-world';

describe('Hello World', () => {
  it('should say hello', () => {
    expect(HelloWorld.hello()).toBe('Hello World!');
  });
});

describe('CI', () => {
  it('should break ci', () => {
    expect(2).toBe(1);
  });
});
