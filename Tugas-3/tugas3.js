// Soal 1
console.count("############################### Soal No ");
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
console.log(kataPertama + " " + 
            kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1) + " " + 
            kataKetiga + " " + 
            kataKeempat.toUpperCase());

// Soal 2
console.count("############################### Soal No ");
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
console.log(Number(kataPertama)+Number(kataKedua)+Number(kataKetiga)+Number(kataKeempat));

// Soal 3
console.count("############################### Soal No ");
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); // do your own! 
var kataKetiga = kalimat.substring(15, 18); // do your own! 
var kataKeempat = kalimat.substring(19, 24); // do your own! 
var kataKelima = kalimat.substring(25); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// Soal 4
console.count("############################### Soal No ");
var nilai = Math.random()*100;
console.log((nilai>=80 ? 'A'
          : nilai>=70 ? 'B'
          : nilai>=60 ? 'C'
          : nilai>=50 ? 'D'
          : 'E') +
          " <- " + nilai);

// Soal 5
console.count("############################### Soal No ");
var tanggal = 29;
var bulan = 2;
var tahun = 2000;

switch (bulan){
  case 1: { bulan = " Januari "; break; }
  case 2: { bulan = " Februari "; break; }
  case 3: { bulan = " Maret "; break; }
  case 4: { bulan = " April "; break; }
  case 5: { bulan = " Mei "; break; }
  case 6: { bulan = " Juni "; break; }
  case 7: { bulan = " Juli "; break; }
  case 8: { bulan = " Agustus "; break; }
  case 9: { bulan = " September "; break; }
  case 10: { bulan = " Oktober "; break; }
  case 11: { bulan = " November "; break; }
  case 12: { bulan = " Desember "; break; }
  default: { bulan = " Not_A_Month "}
}

console.log(tanggal + bulan + tahun);