
function solution(A) {
  //for loop
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }

  //while
  var j = 0;
  while (j < 10) {
    j++;
    console.log(j);
  }

  if (j >= 10) {
    console.log("YES");
  } else {
    console.log("NO");
  }

  let l = 0;

  //do while and break statement
  do {
    if (l === 5) {
      break;
    }
    l++;
  } while (l < 10);

  console.log(l);

  //continue statement
  let g = 0;
  while (g < 10) {
    g++;
    if (g === 3) continue;
    console.log(g);
  }

  //Switch Case 
  let day = 4;
let dayName;

switch (day) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName); 
}

solution();

//Recursion example
function fibonacci_series(n) {
  if (n === 1) {
    return [0, 1];
  } else {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}

console.log(fibonacci_series(4));

//closure example
const arr = [10, 12, 15, 21];

const ex1_1 = () => {
  for (var i = 0; i < arr.length; i++) {
    setTimeout(
      ((j) => {
        return () => {
          console.log("> Index: " + j + ", element: " + arr[j]);
        };
      })(i),
      3000
    );
  }
};

console.log(ex1_1());
