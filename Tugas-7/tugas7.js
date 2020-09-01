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