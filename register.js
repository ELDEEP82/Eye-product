document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة عند إرسال النموذج

    // الحصول على البيانات المدخلة
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // تخزين البيانات في LocalStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // التوجيه إلى صفحة تسجيل الدخول بعد حفظ البيانات
    window.location.href = "login.html";
});
