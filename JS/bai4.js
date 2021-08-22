var N = parseInt(document.getElementById("inputN").value);
var X = parseInt(document.getElementById("inputX").value);
var sum = 0;
var exponent = 1;

function caclSum(){
    for(var i=1; i <= N; i++){
        exponent = exponent ** X;
        sum = sum + exponent;
    }
    document.getElementById("txtLoop4").innerHTML = sum;
    
}
document.getElementById("btnLoop4").onclick = caclSum;