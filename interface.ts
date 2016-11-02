/**
 * TypeScript的一个核心守则就是专注于检查值的“形状（shape）”。
 * 在TypeScript中，接口承担起 了 这个职责。你可以使用它来命名类型，它是结构化代码的好工具，
 * 并且你也可以使用它来对外部调用代码进行约束。
 */

//简单的接口
function printLabel(labelledObj: {label: string}) {
  console.log(labelledObj.label);
}

var myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// 用interface 重构上面的代码
interface LabelValue {
  label: string;
}

function printLabelValue(labbelObj: LabelValue) {
  console.log(labbelObj.obj)
}

var labbelObj = {label: '12345', size: '5'}
printLabelValue(labbelObj)

//函数类型的interface
interface SerachFunc() {
  //返回值是boolean类型
  (source: string, subString: string): boolean;
}

var mySearch: SearchFunc;
//做函数接口时，参数的名字是不必一样的，(src: string, sub: string)
//函数的返回值也会被检查
SearchFunc = function(source: string, subString: string) {
  return true
}

/**数组类型的interface*/
interface StringArray {
  [index: number]: string;
}

var myArray: StringArray;
myArray = ["Bob", "Fred"];

/**类实现一个接口*/
//接口仅仅用于定义一个类中的公有部分。用接口来定义类的私有属性/方法，都是不允许的。
interface ClockInterface {
  currtime: Date;
  setTime(d: Date);
}

class Clock implements ClockInterface {
  currtime: Date;
  setTime(d: Date) {
      this.currtime = d;
  }
  constructor(h: number, m:number) {
  }
}

//当类实现一个接口时，只有类的实例部分才会被检查。
//由于构造函数是类的静态部分，它将不会被检查。
interface ClockStatic {
    new (hour: number, minute: number);
}

class Clock  {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

var cs: ClockStatic = Clock;
var newClock = new cs(7, 30);

/**接口继承*/
//和类一样，接口也可以相互继承,也可以继承多个接口：
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

var square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

/**混合类型*/
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

var c: Counter;
c(10);
c.reset();
c.interval = 5.0;
