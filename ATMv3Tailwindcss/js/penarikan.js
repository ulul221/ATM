let saldo = 1000000
let tunai = {
    seratus: 100000,
    duaratus: 200000,
    tigaratus: 300000,
    limaratus: 500000,
    satujuta: 1000000,
    satusetengahjuta: 1500000,
}

alert(`Saldo anda sebesar ${saldo}`)

function uang(value) {
    if (saldo < value) {
        alert('Saldo tidak mencukupi')
    }else if (confirm(`Anda akan menarik sebesar ${value}?`)) {
        alert(`Sisa saldo anda adalah ${saldo - value}`)
        location.href = "/html/keluar.html"
    }
}

function transaksiLain() {
    const lain = confirm("Fitur Tidak Tersedia Apakah Anda Ingin Membatalkan ?")
    if (lain == true) {
        location.href = "keluar.html"
    }
}