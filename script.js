// script.js

function login() {
    // Kullanıcı adı ve şifre alınır.
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // TODO: Burada genellikle sunucu ile iletişim kurup doğrulama yapılır.

    // Şimdilik basit bir örnek olarak kullanıcı adı ve şifre kontrolü:
    if(username === 'admin' && password === '12345') {
        // Eğer doğrulama başarılı ise, haber sayfasına yönlendir.
        window.location.href = '';
    } else {
        // Eğer doğrulama başarısız ise, hata mesajı göster.
        alert('Kullanıcı adı veya şifre hatalı.');
    }
}
