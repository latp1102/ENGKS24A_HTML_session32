function checkEmail(){
    const email = document.getElementById('email').value;
    const result = document.getElementById('result');
    const char = /^[^\s@]+@[^\s@]+\.(com|vn)$/;

    if (char.test(email)) {
        result.style.color = "green";
        result.textContent = "email hợp lệ";
    } else {
        result.style.color= "red";
        result.style.color = "email ko hợp lệ";
    }
}
