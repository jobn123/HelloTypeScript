/**
 * 基本类型
 */

// Boolean
var isDone: boolean = false;

// Number
var num: number = 1;

// String
var name: string = "bob";
name = "smith";

//Array 两种声明方式
var list: number[] = [1,2,3];

var list:Array<number> = [1,2,3];

//Enum 枚举类型
enum Color {Red, Green, Blue}
var c: color = Color.Green;

//默认情况下，enum 类型从0开始队成员进行枚举，可以手动设置
enum Color {Red = 1, Green, Blue};
var c: Color = Color.Green;

//还可以手动为所有的成员赋值
enum Color {Red = 1, Green = 2, Blue = 4};
var c: Color = Color.Green;

//enum 还可以通过值对应的数字来找这个值
enum Color {Red = 1, Green, Blue};
var colorName: string = Color[2];

alert(colorName);

//Any 类型不确定
var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

//你可能会遇到一个包含不同类型值的数组：
var list:any[] = [1, true, "free"];

list[1] = 100;

//Void 它表示完全没有类型 你可以在没有返回值的函数类型定义中，常常看见它：

function warnUser: void {
  alert('this is my warning message')
}
