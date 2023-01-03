export const cartas = [
"apu.webp",
"bart.png",
"homer.png",
"lisa.png",
"maggie.webp",
"marge.png",
]

const CartasUnicas = cartas.map((image, indice) => ({
  image,
  indice
}))

export const CartasEmPares = [...CartasUnicas, ...CartasUnicas].map((image, id) => ({
image,
id,
}))
