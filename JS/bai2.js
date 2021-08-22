var count = 0;
var i = 0;

// function countDivise3(){
//     while(i < 1000){
//         if(i%3 === 0){
//             count++;
//         }
//         i++;
//     }


//     document.getElementById("txtLoop2").innerHTML = count + " số";
// }
// document.getElementById("btnLoop2").onclick = countDivise3;

function countDivise3() {
    for (i; i < 1000; i++) {
        if (i % 3 === 0) {
            count++;
        }
    }
    document.getElementById("txtLoop2").innerHTML = count + " số";

}
document.getElementById("btnLoop2").onclick = countDivise3;