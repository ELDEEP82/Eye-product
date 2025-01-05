// التعامل مع التسجيل
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // يمكنك هنا إرسال البيانات إلى API أو تخزينها محليًا (على سبيل المثال في localStorage)
    console.log({ name, age, phone, email, password });
});

// التعامل مع تسجيل الدخول
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // تحقق من بيانات المستخدم أو أدخل منطق المصادقة هنا
    console.log({ email, password });
});
