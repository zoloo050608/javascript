// // bordlogo 1--------
// // ogogdson gurvaljnii perimetriig ol
// const a = 10;
// const b = 15;
// const c = 20;

// a + b + c;
// console.log(a + b + c);

// // bodlogo 2--------
// // 1,3,5,7,8.7 buhel toonii niilberiig ol
// const aa = 1;
// const bb = 3;
// const cc = 5;
// const dd = 7;
// const ee = 8.7;

// const niilber = aa + bb + cc + dd + ee;
// console.log(niilber);

// const but = niilber % 1;
// console.log(but);

// const buhel = niilber - but;
// console.log(buhel);

// // bodlogo 3--------
// // ogogdson t/o s ba p iig ol
// const urt = 10;
// const orgon = 5;

// const talbai = urt * orgon;
// console.log(talbai);

// const perimeter = (urt + orgon) * 2;
// console.log(perimeter);

// // bodlo 4--------
// // ogogdson 98 secuntiig minut secunt bolgo
// const second = 98;

// const minutes = parseInt(second / 60);
// const seconds = second % 60;
// console.log(minutes, "minute", seconds);

// // bodlogo 5--------
// // ogohdson 1297 secuntiig tsag minut secunt bolgo
// const secunt = 5000;

// const hour = parseInt(secunt / 3600);
// const minute4 = parseInt(secunt / 60) % 60;
// const secunt1 = secunt % 60;
// console.log(hour, "tsag", minute4, "minut", secunt1, "second");

// // bodlogo 6--------
// // ogogdson 875 minut, 88 secuntiig, secunt ruu shiljuul
// const minute2 = 875;
// const second2 = 88;

// const shiljihsecond = minute2 * 60 + second2;
// console.log(shiljihsecond);

// // bodlogo 7--------
// // ogogdson 83 tsag, 84 minut, 85 secuntiig secunt ruu shiljuul
// const hours = 83;
// const minute3 = 84;
// const second4 = 85;

// const secondall = (hours * 60 + minute3) * 60 + second4;
// console.log(secondall);

// -------------------------------ARROW FUNCTION-SUMAN FUNCTSI-----------------------------

// --------bodlogo 1 FUNCTION--------
// const gurvaljin = (a, b, c) => {
//   if (a && b && c) {
//     return a + b + c;
//   } else {
//     return "buruu";
//   }
// };
// const perimetr = gurvaljin(10, 15, 20);
// console.log(perimetr);

// --------bodlogo 2 FUNCTION--------
// const too = (a, b, c, d, e) => {
//   if (a && b && c && d && e) {
//     return parseInt(a + b + c + d + e);
//   } else {
//     return "nuruu";
//   }
// };
// const buhel = too(1, 3, 5, 7, 8.7);
// console.log(buhel);

// --------bodlogo 3 FUNCTION--------
// const ontsogt = (urt, orgon) => {
//   const s = urt * orgon;
//   const p = (urt + orgon) * 2;
//   return [s, p];
// };
// const talbai = ontsogt(10, 5);
// console.log(talbai[0], talbai[1]);
// --------bodlogo 4 FUNCTION--------
