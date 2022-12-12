let nama = document.getElementById('nama');
let email = document.getElementById('email');
let jam = document.getElementById('jam');
let tujuan = document.getElementById('tujuan');
let jumlah = document.getElementById('jumlah');
let span = document.getElementsByTagName('span');

function proses() {
  if (nama.value == 'Usman') {
    span[0].style.visibility = 'visible';
  }
  if (email.value == 'usmansetiawan916@gmail.com') {
    span[1].style.visibility = 'visible';
  }
  if (jam.value == '20.30') {
    span[2].style.visibility = 'visible';
  }
  if (tujuan.value == 'Bali') {
    span[3].style.visibility = 'visible';
  }
  if (jumlah.value == '2') {
    span[4].style.visibility = 'visible';
    location.replace('sukses.html');
    alert('login Berhasil');
  } else {
    alert('Login Gagal');
  }
}
