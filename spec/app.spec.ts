import {Greet} from '../src/testing';

describe("App should ", () => {
    beforeEach(() => {
      
    });

    it('say hello', () => {
      let g = new Greet();
      let res:string = g.sayHello();
      expect(res).toBe("hello");
    });

    xit("return true when logging in with correct parameters", () => {
      expect(false).toBeTruthy();
    });

    xit("return false when logging in with falsly parameters", () => {
      expect(true).toBeTruthy();
    });
  });