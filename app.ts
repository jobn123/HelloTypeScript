
/**
 * class demo
 */
class Demo {
  a: number;
  b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }
  sum(): number {
    return this.a + this.b
  }
}

export {Demo};

/**
 *
 *引用
import {Demo} from './demo'
const demo = new Demo(1, 2);
console.log(demo.sum())
 */
