//solution for Assignment Q)8.2
const num = 101;
const isPrime = (num) => {
   let sqrtnum = Math.floor(Math.sqrt(num));
   let prime = num !== 1;
   for(let i = 2; i < sqrtnum + 1; i++){
      if(num % i === 0){
         prime = false;
         break;
      };
   };
   return prime;
}
const nextPrime = (num = 1) => {
   while(!isPrime(++num)){
   };
   return num;
};
console.log(nextPrime(num)-num);