  import { tabel } from "./Module/miniLibrary.js";
  
  // =================

  // Agar hasil Tampilan baik, pastikan panjang kolom dan data sama

  // =================
    const tabelBaru = new tabel({
    kolom: ["Nama", "NIM", "Jurusan", "Email", "No. HP", "Jenis Kelamin"],
    baris: [
        ["Roni Eka Setiawan", "31589765", "Tehnik Informatika", "ronistwn35@gmail.com","082265214108", "Laki - Laki"],
        ["Dikky Ryan Pratama", "98743256", "Tehnik Industri", "dikkyryan@gmail.com","082265214108", "Laki - Laki"],
        ["Rifky Kurniawan", "64869872", "Sistem Informasi", "rifkykauman@gmail.com","082265214108", "Laki - Laki"]
      ]
    });
    const buat = document.getElementById("app");
    tabelBaru.render(buat);