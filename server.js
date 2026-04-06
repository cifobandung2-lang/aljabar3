const express = require("express");
const cors = require("cors");
const math = require("mathjs");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Endpoint untuk menghitung soal
app.post("/hitung", (req, res) => {
    let soal = req.body.soal;

    try {
        // Ubah ^ jadi pow agar kompatibel
        soal = soal.replace(/\^/g, "**");

        let hasil = math.evaluate(soal);

        res.json({
            success: true,
            hasil: hasil.toString()
        });

    } catch (error) {
        res.json({
            success: false,
            hasil: "Soal tidak valid"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
    const express = require('express');
const app = express();
const port = 3000;

// akses folder public
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
});