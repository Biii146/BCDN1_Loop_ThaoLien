//biến bước nhảy: i

var sum = 0;
var i = 1;

function caclMin(){
    while(sum < 10000){
        sum = sum + i;
        i++;
    }
    document.getElementById("txtLoop3").innerHTML= i-1;
}
document.getElementById("btnLoop3").onclick = caclMin;