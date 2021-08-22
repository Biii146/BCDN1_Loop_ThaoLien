/** biến bước nhảy: count
 * biến chứa số chẵn: even
 * biến chứa số lẻ: odd
 * biến tạm để tạo cách: space
 */
var count = 0;
var even = "";
var odd = "";
var space = "  ";

//viết chương trình bằng while
// function countEvenOdd(){
//     while(count < 100){
//         if(count%2 == 0){
//             even = even + count + "";
//         }else{
//             odd = odd + count + "";
//         }
//         count++;
//     }
//     document.getElementById("txtLoop1").innerHTML = "Số chẵn: "+even+"<br>"+"Số lẻ: "+odd;
// }
// document.getElementById("btnLoop1").onclick = countEvenOdd;

// //viết chương trình bằng for
function countEvenOdd() {
    for (count; count < 100; count++) {
        if (count % 2 == 0) {
            even = even + count + space;
        } else {
            odd = odd + count + space;
        }
    }
    document.getElementById("txtLoop1").innerHTML = "Số chẵn: "+even+"<br>"+"Số lẻ: "+odd;
}
document.getElementById("btnLoop1").onclick = countEvenOdd;



