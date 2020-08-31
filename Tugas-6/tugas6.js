/* SOAL 1
  OUTPUT:
  ------ SOAL 1 ------
  706.8583470577034
  94.24777960769379
*/
console.log("------ SOAL 1 ------")
let LuasLingkaran = radius => Math.PI * radius * radius;
let KelilingLingkaran = radius => 2 * Math.PI * radius;

const kelilingStr = "Keliling Lingkaran: ";
const luasStr = "Luas Lingkaran: ";
let r = 15;
let luasLingkaran = LuasLingkaran(r);

console.log(luasLingkaran);
console.log(KelilingLingkaran(r));

/* SOAL 2
  OUTPUT:
  ------ SOAL 2 ------
  saya adalah seorang frontend developer
*/
console.log("------ SOAL 2 ------")

let kalimat = ""
let saya = "saya";
let adalah = "adalah";
let seorang = "seorang";
let frontend = "frontend";
let developer = "developer";

let addKalimat = (a, b, c, d, e) => `${a} ${b} ${c} ${d} ${e}`

console.log(addKalimat(saya, adalah, seorang, frontend, developer));

/* SOAL 3
  OUTPUT:
  ------ SOAL 3 ------
  William Imoh
*/
console.log("------ SOAL 3 ------")

const newFunction = (firstName, lastName) => ({
  firstName, lastName, 
  fullName : () => console.log(`${firstName} ${lastName}`)
})

newFunction("William", "Imoh").fullName();

/* SOAL 4
  OUTPUT:
  ------ SOAL 4 ------
  William Imoh
*/
console.log("------ SOAL 3 ------")