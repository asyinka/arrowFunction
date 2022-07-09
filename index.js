const greeting = userName => console.log (`Good Morning ${userName}, Welcome. Na person you be`)

greeting("Alade, The Mighty");

const percent = (x, y) => x / y * 100

console.log (`${percent((67000-20000), 67000)}%`)

let scores = [10, 18, 17, 11, 15, 12]

scores.sort((x, y) => x - y)
scores.forEach((element) => console.log(element))


