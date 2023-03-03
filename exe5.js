let palavra = "renan";

let invertendo = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  invertendo += palavra[i];
}

console.log("String invertida: " + invertendo);
