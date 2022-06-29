function cekinput(i1, i2) {
    if (i1 > 4 || i2 > 4) {
        alert`input tidak boleh lebih dari 3`;
        return 2;
    } else if (i1 <= 0 || i2 <= 0 ) {
        alert`input tidak boleh kurang dari 1`;
        return 2;
    } else if (i1 === i2) {
        alert`Inputan User 1 dan User 2 tidak boleh sama`;
        return 2;
    }

    return 1;
}

alert(`Selamat datang di game tebak angka
kamu diminta untuk menebak angka 1-3
dan kamu akan bermain dalam 5 ronde.
player yang berhasil mengumpulkan tebakan terbanyak akan menang
SELAMAT BERMAIN!!!`);

let ronde = 5;
let no = 1;
let lagi = true;
let skor1 = 0;
let skor2 = 0;

function bermain(input1, input2, tebakan) {
    if (input1 == tebakan) {
        skor1++;
        alert(`User 1 MENANG !!! 
        ==============
        Skor saat ini 
        User 1 = ${skor1}
        User 2 = ${skor2}`);
    } else if (input2 == tebakan) {
        skor2++;
        alert(`User 2 MENANG !!! 
        ==============
        Skor saat ini 
        User 1 = ${skor1}
        User 2 = ${skor2}`);
    } else {
        alert(`Hasilnya Seri !!! 
        ==============
        Skor saat ini 
        User 1 = ${skor1}
        User 2 = ${skor2}`);
    }
}

while (lagi && ronde > 0 ) {
    let tebakan = Math.floor(Math.random() * 3) + 1;
    alert('Ronde ' + no);
    let input1 = prompt('Player 1 Masukkan Angka : ');
    let input2 = prompt('Player 2 Masukkan Angka : ');
    let cek = cekinput(input1, input2);
    if (ronde > 1 ) {
        if (cek == 1 ) {
            bermain(input1, input2, tebakan);
            lagi = confirm('Bermain Lagi ?');
            ronde--;
            no++;
        } else if (cek == 2) {
            alert('bermain lagi ?');
        }
    } else if (ronde = 1 ) {
        if (cek == 1 ) {
            bermain(input1, input2, tebakan);
            lagi = alert('Done');
            ronde--;
            no++;
        } 
        // else if (cek == 2) {
        //     alert('Permainan Berakhir');
        // }
    }
}

if (skor1 > skor2 ) {
    alert(`RESULT : 
    ================
    PLAYER 1 WIIINNN!!!
    ================
    Skor Player 1 = ${skor1}
    Skor Player 2 = ${skor2}`);
} else if (skor1 == skor2) {
    alert(`RESULT : 
    ================
    NOBODY WIN!
    ================
    Skor Player 1 = ${skor1}
    Skor Player 2 = ${skor2}`);
} else {
    alert(`RESULT : 
    ================
    PLAYER 2 WIIINNN!!!
    ================
    Skor Player 1 = ${skor1}
    Skor Player 2 = ${skor2}`);
}


