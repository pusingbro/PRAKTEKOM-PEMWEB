// Fungsi Tugas
// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;

function getData() {
  var data = document.getElementById("terimainput").value
  console.log(data) // Check the console for the values for every click.
  return data
}

var input = getData() // When this is executed there will be no values in the input.

const angka = []


























if (input <= 0 || input >= 21) {
  console.log("Pilih Bilangan Antara 0 sampai 20")
} else {
  if (input % 2 === 1) {
    for (let i = 1; i <= input; i++) {
      angka.push(n1)
      console.log(n1)
      nextTerm = n1 + n2
      n1 = n2
      n2 = nextTerm
    }
  } else {
    let faktorial = 1
    for (i = 1; i <= input / 2; i++) {
      faktorial *= i
      angka.push(faktorial)
      console.log(faktorial)
    }
  }
}
