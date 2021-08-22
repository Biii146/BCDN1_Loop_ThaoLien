/** biến chứa n là num
 * biến chứa giá trị giai thừa là fact*/
function calcFact(){
    var num = parseInt(document.getElementById("inputNum1").value);
    var fact = 1;

    for(var i=1; i <= num; i++){
        fact= fact * i;
    }
    document.getElementById("txtLoop5").innerHTML = fact;
}
document.getElementById("btnLoop5").onclick = calcFact;