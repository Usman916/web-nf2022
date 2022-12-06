function login() {
  event.preventDefault();

  let uname = document.getElementById('username').value;
  let pass = document.getElementById('password').value;

  if (uname == 'usman2022' && pass == 'usman1933') {
    location.replace('success.html');
    alert('Login berhasil');
  } else {
    alert('Login gagal');
  }
}
