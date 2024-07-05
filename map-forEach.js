// bodlogo 1--------
// tus buriin kvadratiig olj array butsaa function ashiglana

// const numbers = [1, 2, 3, 4, 5];

// const kvadrat = numbers.map((el) => el * el);
// console.log(kvadrat);

// bodlogo 2--------
// too tus buriin 20% tai tentseh utgiig oort ni nemj array butsaa

// const prices = [100, 200, 300, 400];

// const tentseh = prices.map((price) => (price / 100) * 20 + price);

// console.log(tentseh);

// bodlogo 3--------
// tooo tus buriin 10% iin hongololtiig olj array butsaa

// const prices = [100, 200, 300, 400];

// const hongololt = prices.map((price) => (price / 100) * 10);
// console.log(hongololt);

// bodlogo 4--------
// 3 iin too heddeh index deer baigaag ol

// const numbers = [1, 2, 3, 4, 5];

// const heddeh = numbers.findIndex((el) => el === 3);
// console.log(heddeh);

// bodlogo 5--------
// 3 aas busad toonuudiig avah

// const numbers = [1, 2, 3, 4, 5];

// const busad = numbers.filter((el) => el !== 3);
// console.log(busad);

// bodlogo 6--------
// sondgoi toonuudiig ol

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const sondgoi = numbers.filter((el) => el % 2 == 1);
// console.log(sondgoi);

// bodlogo 7--------
// usgeer ehelsen nersiig olj butsaa

// const names = ["John", "Jane", "James", "Alice", "Bob"];

// const useg = names.filter((el) => el[0] === "J");
// console.log(useg);

// bodlogo 8--------
// 345 aas  baga bolon ih toonuudiig ylgaj avch 2 array butsaa

// const prices = [120, 340, 200, 323, 411, 405, 20, 40, 504, 993];

// const baga = prices.filter((el) => el < 345);
// const ih = prices.filter((el) => el > 345);
// console.log(baga, ih);

// bodlogo 9--------

let board = "";

const size = ["", "", "", "", "", "", "", ""];

size.forEach((_, row) => {
  size.forEach((_, col) => {
    if ((row + col) % 2 === 0) {
      board += "#";
    } else {
      board += "*";
    }
  });
  board += "\n";
});
console.log(board);
