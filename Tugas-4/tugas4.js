// Soal 1
console.count("##################### Soal");
console.log("LOOPING PERTAMA");
var i = 0;
while (i < 20) {
  i+=2;
  console.log(i + " - I love coding");
}

console.log("LOOPING KEDUA");
while (i >= 2) {
  console.log(i + " - I will become a frontend developer");
  i-=2;
}

// Soal 2
console.count("##################### Soal");
for (i = 1; i <= 20; i++) {
  console.log(i + " - " + ((i%2==0) ? "Berkualitas": (i%3==0) ? "I Love Coding" : "Santai"));
}

// Soal 3
console.count("##################### Soal");
for (i = 1; i <=7 ; i++) {
  var str = "";
  for (var j = 1; j <= i; j++) {
    str += "#";
    // Jika tidak mau menggunakan var str.
    // process.stdout.write("#");
  }
  console.log(str);
  // Jika tidak mau menggunakan var str.
  // console.log();
}

// Soal 4
console.count("##################### Soal");
var kalimat="saya sangat senang belajar javascript";
console.log(kalimat.split(" "));

// Soal 5
console.count("##################### Soal");
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
for (i = 0; i < daftarBuah.length; i++){
  console.log(daftarBuah[i]);
}