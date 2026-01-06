// お問い合わせフォームの処理
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('フォーム送信:', { name, email, message });

    alert(`${name}さん、お問い合わせありがとうございます！`);

    // フォームをリセット
    this.reset();
});
