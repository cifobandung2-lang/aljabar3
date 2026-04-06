const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// endpoint untuk hitung
app.post("/hitung", (req, res) => {
    let soal = req.body.soal;

    try {
        // ⚠️ sementara pakai eval (untuk matematika sederhana)
        let hasil = eval(soal);

        res.json({ hasil: hasil });
    } catch (error) {
        res.json({ hasil: "Soal tidak valid!" });
    }
});

// jalankan server
app.listen(3000, () => {
    console.log("Server jalan di http://localhost:3000");
});