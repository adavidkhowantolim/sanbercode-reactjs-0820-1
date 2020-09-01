// SOAL 1
console.log("------ Soal 1 ------")

class Animal {
  
  constructor(name){
    this._name = name;
    this._legs = 4;
    this._cold_blooded = false;
  }

  get name(){
    return this._name;
  }

  get legs(){
    return this._legs;
  }

  get cold_blooded(){
    return this._cold_blooded;
  }

}

var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

class Ape extends Animal {
  
  constructor(name){
    super(name);
    this._legs = 2;
  }

  yell(){
    console.log("Auooo");
  }

}

class Frog extends Animal {

  constructor(name){
    super(name);
  }

  jump(){
    console.log("hop hop");
  }

}

// Code class Ape dan class Frog di sini
 
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 