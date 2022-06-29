import {tabel} from "./miniLibrary.js";

function asd(a) {
    fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(response => {
    console.log(response[a].id);
        const tabelBaru = new tabel({
            kolom: ["Nama", "NIM", "Jurusan", "Email", "No. HP", "Jenis Kelamin"],
            baris: [
                ["31589765", "Tehnik Informatika", "ronistwn35@gmail.com","082265214108", "Laki - Laki"]
              ]
            });
        const buat = document.getElementById("app");
        tabelBaru.render(buat);
    })
	.catch(err => console.error(err));
}

asd(0);