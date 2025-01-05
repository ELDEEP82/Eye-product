window.onload = function() {
    // استرجاع البيانات المخزنة من LocalStorage
    var username = localStorage.getItem("username");

    // عرض اسم المستخدم في الصفحة
    if (username) {
        document.getElementById("welcomeMessage").innerText = "مرحباً، " + username;
    } else {
        window.location.href = "login.html"; // إذا لم يكن هناك تسجيل دخول، التوجيه إلى صفحة تسجيل الدخول
    }
};
