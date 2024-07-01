const arr = [1, 2, 234, 123, 556, 123, 9, 19, 12, 976];

// bodlogo 1
// ogogdson massiviin niilberiig olj butsaa

// let niilber = 0;
// for (let i = 0; i < arr.length; i++) {
//   niilber += arr[i];
// }
// console.log(niilber);

// bodlogo 2
// ogogdson massiviin dundjiig olj butsaa

// let niilber1 = 0;
// for (let i = 0; i < arr.length; i++) {
//   niilber1 += arr[i];
// }
// let dundaj = niilber1 / arr.length;
// console.log(dundaj);

// bodlogo 3
// ogogdson massiviin hamgiin ih toog olj butsaa

// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// bodlogo 4
// ogogdson stringiin urvuug butsaa (hello->olleh)

// const urvuu = "hello";
// let ug = "";
// for (let i = urvuu.length - 1; i >= 0; i--) {
//   ug += urvuu[i];
// }
// console.log(ug);

// bodlogo 5
// ogogdson stringiin temdegt bur davhardaj oroogui esehiig shalga

const string = "hello world";

for (let i = 0; i <= string.length; i++) {
  for (let j = i + 1; j <= string.length; j++) {
    if (string[i] == string[j]) {
      console.log(string[i], string[j]);
    }
  }
}

// bodlogo 6
// ogogdson 2 massiviin ogtoltsliig olj butsaa
