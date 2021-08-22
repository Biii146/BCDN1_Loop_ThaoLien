// hàm kiểm tra số nguyên tố
function checkPrime(x){
    //biến kiểm tra
    var check = true;

    // Nếu x bé hơn 2 tức là không phải số nguyên tố
    if (x < 2) {
        check = false;
    }
    else if (x == 2) {
        check = true;
    }
    else if (x % 2 == 0) {
        check = false;
    }
    else {
        for (var i = 3; i <= Math.sqrt(x); i += 2){
            if (x % i == 0) {
                check = false;
            }
        }
    }
    return check;
}
 
//hàm in ra các số nguyên tố từ 1 tới n
function printPrime(){
    var number = parseInt(document.getElementById("inputNum2").value);
    var content = "";
    var space = "  "

    for (var i = 1; i <= number; i++) {
        if (checkPrime(i)){ 
            content = content + i + space;
        }
    }
    document.getElementById("txtLoop7").innerHTML = content;
}
document.getElementById("btnLoop7").onclick = printPrime;