const api1 = jQuery(".test1");
api1.addClass("red").addClass("blue"); //链式操作

const api2 = api1.find(".child").addClass("green");

api1.addClass("black");

const oldApi = api2.end();
console.log(oldApi === api1);
oldApi.addClass("yellow");
