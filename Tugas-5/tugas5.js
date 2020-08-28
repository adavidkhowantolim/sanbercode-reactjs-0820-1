// Soal 1
console.count("############################# Soal");

function halo(){
  return "Halo Sanbers!"
}

console.log(halo()) // "Halo Sanbers!" 

// Soal 2
console.count("############################# Soal");

function kalikan(a, b) {
  return a*b;
}

var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48

// Soal 3
console.count("############################# Soal");

function introduce(name, age, address, hobby){
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
 // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!" 
console.log(perkenalan)

// Soal 4
console.count("############################# Soal");

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]

arrayDaftarPeserta = {
  "nama" : arrayDaftarPeserta[0],
  "jenis kelamin" : arrayDaftarPeserta[1],
  "hobi" : arrayDaftarPeserta[2],
  "tahun lahir" : arrayDaftarPeserta[3]
};

console.log(arrayDaftarPeserta);

// Soal 5
console.count("############################# Soal");

var data_buah = [
  {
    "nama": "strawberry",
    "warna": "merah",
    "ada bijinya": "tidak",
    "harga": 9000 
  },
  {
    "nama": "jeruk",
    "warna": "oranye",
    "ada bijinya": "ada",
    "harga": 8000
  },
  {
    "nama": "Semangka",
    "warna": "Hijau & Merah",
    "ada bijinya": "ada",
    "harga": 10000,
  },
  {
    "nama": "Pisang",
    "warna": "Kuning",
    "ada bijinya": "tidak",
    "harga": 5000
  }
]

console.log(data_buah[0]);

// Soal 6
console.count("############################# Soal");

var dataFilm = [];

// dataFilm pass by reference to container
function addFilm(container, nama, durasi, genre, tahun) { 
  container.push(
    {
      "nama" : nama,
      "durasi" : durasi,
      "genre" : genre,
      "tahun" : tahun
    }
  );
  // output data added
  console.log(container[container.length-1]);
} 

for (var i = 0; i < 20; i+=2){
  addFilm(dataFilm, `Movie ${i/2}`, i/4, `Genre ${i*5}`, 1975+i*2.5);
}