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
