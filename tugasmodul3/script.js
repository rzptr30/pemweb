function validateForm() {
    let nama = document.getElementById("nama").value.trim();
    let npm = document.getElementById("npm").value.trim();
    let programStudi = document.getElementById("programStudi").value.trim();
    let fakultas = document.getElementById("fakultas").value.trim();
    let tempatLahir = document.getElementById("tempatLahir").value.trim();
    let tanggalLahir = document.getElementById("tanggalLahir").value.trim();
    let jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked');

    let namaRegex = /^[A-Za-z\s']+$/;  // Hanya huruf dan tanda petik satu (')
    let npmRegex = /^[0-9]{8,12}$/;    // Hanya angka, panjang 8-12 karakter

    // 🔴 Validasi Nama: Tidak boleh kosong & hanya huruf
    if (!nama) {
        alert("Nama tidak boleh kosong.");
        return false;
    } else if (!namaRegex.test(nama)) {
        alert("Nama hanya boleh berisi huruf dan tanda petik satu (').");
        return false;
    }

    // 🔴 Validasi NPM: Harus 8-12 digit angka
    if (!npm) {
        alert("NPM tidak boleh kosong.");
        return false;
    } else if (!npmRegex.test(npm)) {
        alert("NPM harus terdiri dari 8-12 angka.");
        return false;
    }

    // 🔴 Validasi Program Studi & Fakultas (tidak boleh kosong)
    if (!programStudi) {
        alert("Program Studi tidak boleh kosong.");
        return false;
    }
    if (!fakultas) {
        alert("Fakultas tidak boleh kosong.");
        return false;
    }

    // 🔴 Validasi Tempat Lahir (tidak boleh kosong)
    if (!tempatLahir) {
        alert("Tempat Lahir tidak boleh kosong.");
        return false;
    }

    // 🔴 Validasi Tanggal Lahir (tidak boleh kosong)
    if (!tanggalLahir) {
        alert("Tanggal Lahir tidak boleh kosong.");
        return false;
    }

    // 🔴 Validasi Jenis Kelamin (wajib dipilih)
    if (!jenisKelamin) {
        alert("Pilih jenis kelamin.");
        return false;
    }

    // ✅ Jika semua validasi lolos, tampilkan notifikasi sukses
    alert("✅ Form Berhasil Dikirim!");
    return true;  // Form akan dikirim jika semua validasi lolos
}
