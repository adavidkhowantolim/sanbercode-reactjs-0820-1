// SOAL 1

// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
let i = 0;
readBooks(10000, books[0], function(time){
  readBooks(time, books[1], function(time){
    readBooks(time, books[2], function(time){
      readBooks(time, books[3], function(time){
      })
    })
  })
});

// Penambahan Logic
// readBooks(10000, books[0], function(time){
//   if (time >= books[1].timeSpent){
//     readBooks(time, books[1], function(time){
//       if (time >= books[2].timeSpent){
//         readBooks(time, books[2], function(time){
//           if (time >= books[3].timeSpent){
//             readBooks(time, books[3], function(time){
//             })
//           }
//         })
//       }
//     })
//   }
// });