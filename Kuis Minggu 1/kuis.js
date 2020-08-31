// SOAL 1
// function LuasLingkaran(radius){
//   return Math.PI*radius*radius;
// }

// function LuasSegitiga(tinggi, alas){
//   return alas*tinggi/2;
// }

// function LuasPersegi(sisi){
//   return sisi*sisi;
// }

// console.log(LuasLingkaran(5.6418958)); // OUTPUT: 99.99999874235314
// console.log(LuasSegitiga(3,4)); // OUTPUT: 6
// console.log(LuasPersegi(99)); // OUTPUT: 9801

// SOAL 2
// var daftarAlatTulis = ["2. Pensil", "5. Penghapus", "3. Pulpen", "4. Penggaris", "1. Buku"];
// daftarAlatTulis.sort();
// var i = 0
// while (i < daftarAlatTulis.length){
//   console.log(daftarAlatTulis[i]);
//   i++;
// }

// SOAL 3
// var pesertaLomba= [["Budi", "Pria", "172cm"], ["Susi", "Wanita", "162cm"], ["Lala", "Wanita", "155cm"], ["Agung", "Pria", "175cm"]];
// pesertaLomba =  pesertaLomba.map(function(x) { 
//                   return { 
//                     "nama": x[0], 
//                     "jenis_kelamin": x[1],
//                     "tinggi": x[2]
//                   }; 
//                 });
// console.log(pesertaLomba);

// SOAL 4
var daftarNama = [];
function TambahNama(nama, jenisKelamin){
  daftarNama.push({
    "nama": nama,
    "jenisKelamin": jenisKelamin,
    "panggilan": jenisKelamin.toLowerCase() == "laki-laki" ? "bapak" : "ibu"
  })
}

TambahNama("Asep", "Laki-laki");
TambahNama("Siti", "Perempuan");
TambahNama("Yeni", "Perempuan");
TambahNama("Rudi", "Laki-laki");
TambahNama("Adit", "Laki-laki");

for (var i = 0; i < daftarNama.length; i++){
  console.log(`${i+1}. ${daftarNama[i].panggilan.charAt(0).toUpperCase() + daftarNama[i].panggilan.slice(1)} ${daftarNama[i].nama}`)
}

// OUTPUT:
// 1. Bapak Asep
// 2. Ibu Siti
// 3. Ibu Yeni
// 4. Bapak Rudi
// 5. Bapak Adit