/*变量*/

// 不声明变量
mood = "happy";
age = 33;
flag = true;

// 声明变量然后赋值
var mood;
mood = "happy";

// 声明变量并赋值
var mood = "happy";



/*数组*/
var beatles = Array();  //初始化时声明为Array，且可以在声明时不给出数组长度

var beatles = Array(4);  //初始化时声明为Array，且在声明时给出数组长度，该数组长度为4
beatles[0] = "John";
beatles[1] = "Paul";
beatles[2] = "George";
beatles[3] = "Ringo";

var beatles = Array("John", "Paul", "George", "Ringo"); //初始化时声明为Array，且在初始化时添加元素

var beatles = ["John", "Paul", "George", "Ringo"]; //无需声明为Array，同时添加元素

var lennon = ["John", 1940, false]; //甚至一个数组可以放多种不同类型的元素

var beatles = [];
beatles[0] = lennon;  //数组的元素可以是数组

var lennon = Array();  //关联数组  下标可以用字符串代替，但推荐使用对象，下边会说
lennon["name"] = "John";
lennon["year"] = 1940;
lennon["living"] = false;



/*对象*/
var lennon = Object();
lennon.name = "John";
lennon.year = 1940;
lennon.living = false;

var lennon = { name: "John", year: 1940, living: false };  //花括号式创建对象

var beatles = {};
beatles.vocalist = lennon;
var theName = beatles.vocalist.name;   //这里的值是”John“
var theYear = beatles.vocalist.year;   //这里的值是1940
var theLiving = beatles.vocalist.living;  //这里的值是false

/*比较*/
var a = false;
var b = "";
if (a==b) {
    alert("a equal b");  //这里判断为true，因为==认为false与空字符串相同
}

//可以使用===来进行严格比较，不仅比较值，还会比较变量的类型
var a = false;
var b = "";
if(a===b) {
    alert("a equal b"); //这里判断为false，虽然值相同，但是a和b的类型不同
}