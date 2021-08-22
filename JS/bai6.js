function changeDiv (){
    var div = document.getElementsByName("div");

    for(var i=0; i < div.length; i++){
        if((i+1)%2 === 0){
            div[i].style.background = "red";
        }else{
            div[i].style.background = "blue";
        }
    }
}
document.getElementById("btnLoop6").onclick = changeDiv;


