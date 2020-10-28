function Person(name, age){
  this.name = name
  this.age = age
}
Person.prototype.say = function(){
  console.log("hahhahahha")
}
var p1 = new Person('zs', 18);
console.log('p1',p1)
console.log(p1.say())

class Per{
  constructor(name, age){
    this.name = name
    this.age = age
  }
  say(){
    console.log('ok!')
  }
}
var p2 = new Per('ls', 19);
console.log('p2',p2)
p2.say()