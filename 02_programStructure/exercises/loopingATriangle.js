// function loopingATriangle(num) {
//      let count = 1;
//      let returningString;
//      while (count <= num) {
//           returningString = '';
//           for (let i = 0; i < count; i++) {
//                returningString += '#';
//           }
//           console.log(returningString);
//           count++;
//      }
// }

function loopingATriangle(num) {
     let returningString = '';
     for (let i = 0; i < num; i++) {
          returningString += '#';
          console.log(returningString);
     }
}

loopingATriangle(7);
