const array = [2,3,0,-3,-5,3];

// Tugas : Mendapatkan perbandingan antar bilangan
// Contoh : Angka Positif = 3, Panjang Array = 6
// Maka Positif = 3/6

function plusminus(arr) {
    // Menentukan Panjang Array
    const length = arr.length;

    // Menentukan Banyak Nilai Positif, Negatif dan Nol
    let positif = 0;
    let negatif = 0;
    let nol = 0;

    arr.forEach(e => {
        if(e > 0){
            positif++
        }else if(e < 0){
            negatif++
        }else{
            nol++
        }
    });

    // Lakukan Console untuk Hasil
    console.log(positif/length)
    console.log(negatif/length)
    console.log(nol/length)
}

plusminus(array)