const jam1 = '12:20:15AM'
const jam2 = '07:20:15PM'

// Tugas : Mengkonversi AM dan PM menjadi format 24 jam
// Jika 12 AM maka jam = 00 || case jam1
// Jika PM < Jam 12 maka jam + 12 || case jam2

function timeConv(jams) {
    // Pisahkan jam menjadi array
    const arrJam = jams.split(':');
    
    // Ambil nilai Jam
    const jam = arrJam[0];
    
    // Ambil Format Jam(AM/PM) // Menghilangkan 2 Nomor pada Detik
    const format = arrJam[2].substring(2);
    
    arrJam[2] = arrJam[2].slice(0,2);
    arrJam[0] = arrJam[0];

    // Lakukan Konversi Pada Jam
    if(format === "PM" && jam !== "12"){
        arrJam[0] = parseInt(arrJam[0]) + 12;
    }else if(format === "AM" && jam === "12"){
        arrJam[0] = "00"
    }

    // Return gabungan Array ke format awal
    return arrJam.join(":");
}


console.log(timeConv(jam2))