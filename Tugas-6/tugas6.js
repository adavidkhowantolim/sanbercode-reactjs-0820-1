// SOAL 1
console.log("------ SOAL 1 ------")
let LuasLingkaran = radius => Math.PI * radius * radius;
let KelilingLingkaran = radius => 2 * Math.PI * radius;

const kelilingStr = "Keliling Lingkaran: ";
const luasStr = "Luas Lingkaran: ";
let r = 15;
let luasLingkaran = LuasLingkaran(r);

console.log(luasLingkaran);
console.log(KelilingLingkaran(r));

// SOAL 1
console.log("------ SOAL 2 ------")

let kalimat = ""
let saya = "saya";
let adalah = "adalah";
let seorang = "seorang";
let frontend = "frontend";
let developer = "developer";

let addKalimat = (a, b, c, d, e) => `${a} ${b} ${c} ${d} ${e}`

console.log(addKalimat(saya, adalah, seorang, frontend, developer));