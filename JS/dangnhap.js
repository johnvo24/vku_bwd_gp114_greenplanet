function login(){
    window.location.href = './trangchu.html';
}
function registry() {
    window.location.href = './dangnhap.html'
}
function checkinput() {
    let tk = document.getElementById("tk").value;
    let mk = document.getElementById("mk").value;
    var str = new String(mk);
    let count = str.length;
    var str2 = new String(tk);
    let count2 = str2.length;
    if(tk == "" || mk == ""){
        alert("Vui lòng điền đủ thông tin!");
    }
    else if(count2 < 12){
        alert("Tài khoản phải dài hơn 12 ký tự!");
    }
    else if(count < 6){
        alert("Mật khẩu phải dài hơn 6 ký tự!");
    }
    else{
        return login();
    }
}
function checkinput1() {
    let tk = document.getElementById("tk").value;
    let mk = document.getElementById("mk").value;
    let mk1 = document.getElementById("mk1").value;
    var str = new String(mk);
    let count = str.length;
    var str1 = new String(mk1);
    let count1 = str1.length;
    var str2 = new String(tk);
    let count2 = str2.length;
    if(tk == "" || mk == "" || mk1 == ""){
        alert("Vui lòng điền đủ thông tin!");
    }
    else if(count2 < 12){
        alert("Tài khoản phải dài hơn 12 ký tự!");
    }
    else if(count < 6){
        alert("Mật khẩu phải dài hơn 6 ký tự!");
    }
    else if(count1 < 6){
        alert("Mật khẩu phải dài hơn 6 ký tự!");
    }
    else if(mk != mk1){
        alert("Mật khẩu không giống nhau");
    }
    else{
        return login();
    }
}
function showpass() {
    var pass = document.getElementById("mk");
    var pass1 = document.getElementById("mk1");
    var eye = document.getElementById("conmat");
    if(pass.type === "password"){
        pass.type = "text";
        eye.style = "color: #1abc9c";
    }
    else{
        pass.type = "password";
        eye.style = "color: #adadad";
    }
}
function showpass1() {
    var pass1 = document.getElementById("mk1");
    var eye1 = document.getElementById("conmat1");
    if(pass1.type === "password"){
        pass1.type = "text";
        eye1.style = "color: #1abc9c";
    }
    else{
        pass1.type = "password";
        eye1.style = "color: #adadad";
    }
}