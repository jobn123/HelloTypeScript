
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

enum Color {Red, Green, Blue};
var c: Color = Color.Green;


enum Color2 {Red = 1, Green = 2, Blue = 4};
var c2: Color2 = Color2.Green

function printLabel(labelledObj: {label: string}) {
  console.log(labelledObj.label);
}

var myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

/**
 *
 *引用
import {Demo} from './demo'
const demo = new Demo(1, 2);
console.log(demo.sum())
 */
