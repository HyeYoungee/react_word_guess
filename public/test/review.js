//맵 기본 문법
let arr = ['a', 'b', 'c'];

let list = arr.map(function(item){
  return `<li>${item}</li>`;
});

console.log(list);