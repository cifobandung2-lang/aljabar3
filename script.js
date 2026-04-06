async function hitung() {
    let soal = document.getElementById("inputSoal").value;

    let response = await fetch("http://localhost:3000/hitung", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ soal: soal })
    });

    let data = await response.json();

    document.getElementById("output").innerText = data.hasil;
    function hitung() {
  let soal = document.getElementById("inputSoal").value;
  let hasil = "";

  // contoh: x^2 - 9
  if (soal === "x^2-9" || soal === "x^2 - 9") {
    hasil = "(x - 3)(x + 3)";
  } else {
    hasil = "Soal belum tersedia";
  }

  async function hitung() {
  let soal = document.getElementById("inputSoal").value;
  let hasil = "";

  // Hilangkan spasi biar lebih fleksibel
  soal = soal.replace(/\s/g, "");

  // LIST SOAL ALGEBRA
  if (soal === "x^2-9") {
    hasil = "(x - 3)(x + 3)";
  } 
  else if (soal === "x^2-4") {
    hasil = "(x - 2)(x + 2)";
  } 
  else if (soal === "x^2-16") {
    hasil = "(x - 4)(x + 4)";
  } 
  else if (soal === "x^2+6x+9") {
    hasil = "(x + 3)^2";
  } 
  else if (soal === "x^2+5x+6") {
    hasil = "(x + 2)(x + 3)";
  } 
  else if (soal === "x^2-5x+6") {
    hasil = "(x - 2)(x - 3)";
  } 
  else if (soal === "2x+3x") {
    hasil = "5x";
  } 
  else if (soal === "4x-2x") {
    hasil = "2x";
  } 
  else if (soal === "3x*2x") {
    hasil = "6x^2";
  } 
  else if (soal === "(x+2)(x+3)") {
    hasil = "x^2 + 5x + 6";
  } 
  else if (soal === "(x-3)(x+3)") {
    hasil = "x^2 - 9";
  } 
  else {
    hasil = "Soal belum tersedia 😅";
  }

  document.getElementById("hasil").innerText = hasil;
}
}
}