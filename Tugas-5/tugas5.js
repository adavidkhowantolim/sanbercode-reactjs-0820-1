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

/* 
  OUTPUT :
    ############################# Soal: 1
    Halo Sanbers!
    ############################# Soal: 2
    48
    ############################# Soal: 3
    Nama saya John, umur saya 30 tahun, alamat saya di Jalan belum jadi, dan saya punya hobby yaitu Gaming!
    ############################# Soal: 4
    {
      nama: 'Asep',
      'jenis kelamin': 'laki-laki',
      hobi: 'baca buku',
      'tahun lahir': 1992
    }
    ############################# Soal: 5
    {
      nama: 'strawberry',
      warna: 'merah',
      'ada bijinya': 'tidak',
      harga: 9000
    }
    ############################# Soal: 6
    { nama: 'Movie 0', durasi: 1, genre: 'Genre 0', tahun: 1975 }
    { nama: 'Movie 1', durasi: 1.5, genre: 'Genre 10', tahun: 1980 }
    { nama: 'Movie 2', durasi: 2, genre: 'Genre 20', tahun: 1985 }
    { nama: 'Movie 3', durasi: 2.5, genre: 'Genre 30', tahun: 1990 }
    { nama: 'Movie 4', durasi: 3, genre: 'Genre 40', tahun: 1995 }
    { nama: 'Movie 5', durasi: 3.5, genre: 'Genre 50', tahun: 2000 }
    { nama: 'Movie 6', durasi: 4, genre: 'Genre 60', tahun: 2005 }
    { nama: 'Movie 7', durasi: 4.5, genre: 'Genre 70', tahun: 2010 }
    { nama: 'Movie 8', durasi: 5, genre: 'Genre 80', tahun: 2015 }
    { nama: 'Movie 9', durasi: 5.5, genre: 'Genre 90', tahun: 2020 }

    D:\MyDoc\David\SanberCode\sanbercode-reactjs-0820-1\Tugas-5>node tugas5.js
    ############################# Soal: 1
    Halo Sanbers!
    ############################# Soal: 2
    48
    ############################# Soal: 3
    Nama saya John, umur saya 30 tahun, alamat saya di Jalan belum jadi, dan saya punya hobby yaitu Gaming!
    ############################# Soal: 4
    {
      nama: 'Asep',
      'jenis kelamin': 'laki-laki',
      hobi: 'baca buku',
      'tahun lahir': 1992
    }
    ############################# Soal: 5
    {
      nama: 'strawberry',
      warna: 'merah',
      'ada bijinya': 'tidak',
      harga: 9000
    }
    ############################# Soal: 6
    { nama: 'Movie 0', durasi: 0, genre: 'Genre 0', tahun: 1975 }
    { nama: 'Movie 1', durasi: 0.5, genre: 'Genre 10', tahun: 1980 }
    { nama: 'Movie 2', durasi: 1, genre: 'Genre 20', tahun: 1985 }
    { nama: 'Movie 3', durasi: 1.5, genre: 'Genre 30', tahun: 1990 }
    { nama: 'Movie 4', durasi: 2, genre: 'Genre 40', tahun: 1995 }
    { nama: 'Movie 5', durasi: 2.5, genre: 'Genre 50', tahun: 2000 }
    { nama: 'Movie 6', durasi: 3, genre: 'Genre 60', tahun: 2005 }
    { nama: 'Movie 7', durasi: 3.5, genre: 'Genre 70', tahun: 2010 }
    { nama: 'Movie 8', durasi: 4, genre: 'Genre 80', tahun: 2015 }
    { nama: 'Movie 9', durasi: 4.5, genre: 'Genre 90', tahun: 2020 }
*/