let a= [1,2,3,true,'hello',7.2];
// let sum = 0;
// for (let i=0;i<=5;i++){
//     // console.log(a[i]);
//     sum=sum+a[i];
// }
// console.log(sum);

console.log(a.length);

a.pop();
console.log(a);

a.push("ai/ml");
console.log(a);

a.shift();
console.log(a);

a.unshift(83.005);
console.log(a);

a.splice(2,3,'box','hsd',90);
console.log(a);
