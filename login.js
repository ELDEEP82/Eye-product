document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة عند إرسال النموذج

    // الحصول على البيانات المدخلة
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // استرجاع البيانات المخزنة في LocalStorage
    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");

    // مقارنة البيانات المدخلة مع المخزنة
    if (email === storedEmail && password === storedPassword) {
        // إذا كانت البيانات صحيحة، التوجيه إلى الصفحة الرئيسية
        window.location.href = "home.html";
    } else {
        // إذا كانت البيانات غير صحيحة، إظهار رسالة خطأ
        alert("بيانات الدخول غير صحيحة");
    }
});
