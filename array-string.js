// bodlogo 1--------
// ogogdson massiviin niilberiig olj butsaa
// const arr = [1, 2, 234, 123, 556, 123, 9, 19, 12, 976];
// let niilber = 0;
// for (let i = 0; i < arr.length; i++) {
//   niilber += arr[i];
// }
// console.log(niilber);

// bodlogo 2--------
// ogogdson massiviin dundjiig olj butsaa
// const arr = [1, 2, 234, 123, 556, 123, 9, 19, 12, 976];
// let niilber1 = 0;
// for (let i = 0; i < arr.length; i++) {
//   niilber1 += arr[i];
// }
// let dundaj = niilber1 / arr.length;
// console.log(dundaj);

// bodlogo 3--------
// ogogdson massiviin hamgiin ih toog olj butsaa
// const arr = [1, 2, 234, 123, 556, 123, 9, 19, 12, 976];
// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// bodlogo 4--------
// ogogdson stringiin urvuug butsaa (hello->olleh)

// const urvuu = "hello";
// let ug = "";
// for (let i = urvuu.length - 1; i >= 0; i--) {
//   ug += urvuu[i];
// }
// console.log(ug);

// bodlogo 5--------
// ogogdson stringiin temdegt bur davhardaj oroogui esehiig shalga

// const string = "hello world";

// for (let i = 0; i <= string.length; i++) {
//   for (let j = i + 1; j <= string.length; j++) {
//     if (string[i] == string[j]) {
//       console.log(string[i], string[j]);
//     }
//   }
// }

// bodlogo 6--------
// ogogdson 2 massiviin ogtoltsliig olj butsaa
// const arr = [1, 2, 234, 123, 556, 123, 9, 19, 12, 976];
// const array = [199, 123, 544, 998];
// let davhtsal = "";

// for (let i = 0; i <= arr.length; i++) {
//   for (let j = 0; j <= array.length; j++) {
//     if (arr[i] == array[j]) {
//       console.log(arr[i], array[j]);
//     }
//   }
// }
// bodlogo 7--------
// ogogdson n too hurtelh buh tegsh toog hevle
// const too = 20;
// let sum = 1;
// for (let i = 1; i <= too; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// bodlogo 8--------
// ogogdson n toonii ondortei piramid '*' ashiglan hevle
// const a = 8;

// const mid = Math.floor((2 * a - 1) / 2);

// for (let row = 0; row < a; row++) {
//   let line = " ";
//   for (let col = 0; col < 2 * a - 1; col++) {
//     if (col >= mid - row && col <= mid + row) {
//       line += "*";
//     } else {
//       line += " ";
//     }
//   }
//   console.log(line);
// }

// bodlogo 9--------
// ogogdson n toonii pactorialiig olj butsaa.

// const n = 8;
// let urjver = 1;

// for (let i = 1; i <= n; i++) {
//   urjver = urjver * i;
// }
// console.log(urjver);

// bodlogo 10--------
// ogogdson n too hurtleh buh tegsh toog hevle
// const a = 8;
// let b = 1;
// for (let i = 1; i <= a; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// bodlogo 11--------
// ogogdson n too palindrom too esehiig shalgaad mon bol true, bish bol false butsaa
const n = 12321;
