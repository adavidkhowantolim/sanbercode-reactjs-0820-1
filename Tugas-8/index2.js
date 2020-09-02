// SOAL 2

var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
readBooksPromise(10000, books[0])
  .then(function(time){

    readBooksPromise(time, books[1])
      .then(function(time){

        readBooksPromise(time, books[2]) 
          .then(function(time){ // buku habis
            // console.log(`=> Waktu masih tersisa ${time}`);
          })

          .catch(function(error){ // waktu habis
            console.log(error.message);
          })

      })
      .catch(function(error){ // waktu habis
        console.log(error.message);
      })

  })
  .catch(function(error){ // waktu habis
    console.log(error.message);
  })

/* 
OUTPUT:
  saya mulai membaca LOTR
  saya sudah selesai membaca LOTR, sisa waktu saya 7000
  saya mulai membaca Fidas
  saya sudah selesai membaca Fidas, sisa waktu saya 5000
  saya mulai membaca Kalkulus
  saya sudah selesai membaca Kalkulus, sisa waktu saya 1000
*/