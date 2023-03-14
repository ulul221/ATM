const saldo = 1000000
const input = document.getElementById('input')

function button() {
    // if (input.value < saldo) {
    //     if (input.value == "") {
    //         alert("Nominal Tidak Boleh Kosong")
    //     }else if (input.value % 50000 == 0) {
    //         const konfirmasi = confirm(`Anda akan menarik sebesar ${input.value}?`)
    //         if (konfirmasi) {
    //             alert(`Sisa Saldo Anda Adalah ${saldo - input.value}`)
    //             location.href = "keluar.html"
    //         }
    //     }else(
    //         alert('Nominal Tidak Sesuai')
    //     )
    // }else(
    //     alert('Saldo Anda Tidak> Mencukupi')
    // )
    if (input.value.length > 0 && input.value > 0) {
        if (input.value % 50000 == 0) {
            if (input.value < saldo) {
                let jumlah = confirm (`saldo anda ${saldo - input.value}`)
                if (jumlah == true) {
                    location.href = "keluar.html"
                }
            } else {
                alert("saldo kurang")
            }
        } else {
            alert ("masukan nominal dengan benar")
        }
    } else {
       alert("isi nominal dengan benar") 
    }
}