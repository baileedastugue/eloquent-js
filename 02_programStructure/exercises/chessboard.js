function chessboard(n) {
     let line = 0;
     let evenLineSegment = evenLine(n);
     let oddLineSegment = oddLine(n);
     for (let i = 0; i < n; i++) {
          // this is an even number
          if (line % 2 === 0 || line === 0) {
               console.log(evenLineSegment);
          } else {
               // this is an odd number
               console.log(oddLineSegment);
          }
          line++;
     }
}

function evenLine(n) {
     let returningLine = '';
     for (let i = 0; i < n; i++) {
          if (i === 0 || i % 2 === 0) {
               returningLine += ' ';
          } else {
               returningLine += '#';
          }
     }
     return returningLine;
}

function oddLine(n) {
     let returningLine = '';
     for (let i = 0; i < n; i++) {
          if (i === 0 || i % 2 === 0) {
               returningLine += '#';
          } else {
               returningLine += ' ';
          }
     }
     return returningLine;
}

chessboard(10);
