/*var obj =function () {
    this.name="dad";
    this.look ="ddd";
    this.speak = function () {
        console.log("dd");
    }
};
var c = new obj();
console.log(c.name);
c.speak();
var obj2 = {
    name:"fdf"
};
var a =Object.create(obj2);
console.log(a.name);
class obj{

}
var a2= new obj();
var obj3 = function () {
    createNew: function () {
        var o2={};
        var name="ha";
        o2.speak=function()
        {
            console.log(name);
        };
        return o2;
    }
};
var haha =obj3.createNew();
haha.speak();
var obj= function () {
  name="ds";
};
Object.getPrototypeOf(obj) = Object.prototype;
console.log(Object.getPrototypeOf([]));
console.log(Object.getPrototypeOf(function () {

}));
var f =function () {

};
var y= {
    name:"fdsf"
};
f.prototype =y;
var o = new f();
console.log(o.name);
var other =new f();
f
var f= function (cb) {
    cb();
};
var ff= function () {
    console.log("ha");
};
f(ff);
var arr =[1,2,3,4,5];
console.log(arr.map(String));
var filter = function (arr,cb) {
    var out =[];
    for(var i=0;i<arr.length;i++) {
        if (cb(arr[i]))
            out.push(arr[i]);
    }
    return out;
};
filter(arr,function (x){
    if(x&1)
        return true;
    return false;
} ;{

}).*/
var arr=[];
while(arr.length<500000)
arr.push(arr.length);
console.time("for");
var len =arr.length;
for(var i=0;i<len;;i++;
)
{console.timeEnd("for");/*
console.time("")*/}