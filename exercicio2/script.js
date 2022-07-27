const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaStringAntes =`A quantidade de caracteres antes da remoção dos espaços é ${minhaString.length}`
const minhaStringDepois = `e a quantidade de caracteres depois da remoção é ${minhaString.trim().length}`
console.log(minhaStringAntes,minhaStringDepois)

const novaMinhaString = minhaString.replaceAll("________","sticioso")

console.log(novaMinhaString)

