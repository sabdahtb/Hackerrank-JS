const array = [1,3,5,2,4];

// Tugas : Mencari nilai tertinggi dan terendah dari penjumlahan angka Array
// element array dikurangi 1
// Hasil Tertinngi = 2 + 3 + 4 + 5
// Hasil Terendah = 1 + 2 + 3 + 4

function minmax(arr) {
    // Buat Array untuk tempat nilai hasil
    const hasil = [0,0];

    // Ambi index dari nilai tertinggi dan terendah pada array
    const indexMax = arr.indexOf(Math.max.apply(null, arr))
    const indexMin = arr.indexOf(Math.min.apply(null, arr))

    // Lakukan Penjumlahan tanpa masing masing nilai
    arr.forEach((e, index) => {
        if(index !== indexMax){
            hasil[0] += e;
        }else if(index !== indexMin){
            hasil[1]+= e;
        }
    });

    // Return hasilnya (Tidak dalam bentuk Array)
    return hasil.join(' ')
}

// Log Hasilnya
const result = minmax(array);
console.log(result)