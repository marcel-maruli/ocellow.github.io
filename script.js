var pemain = "X"
const applause = new Audio();
    applause.src = "applause.wav" 
document.getElementById("hasil").innerHTML=
"Giliran Pemain:" + pemain
function klick(x) {
    document.getElementById("bDepan"+x).style.transform="perspective(600px)rotateY(-180deg)";
    document.getElementById("bBelakang"+x).style.transform="perspective(600px)rotateY(0deg)";   
    document.getElementById("bBelakang"+x).innerHTML = pemain;
    document.getElementById("bBelakang"+x).value = pemain;
    document.getElementById("bBelakang"+x).disabled = "disabled";

    if (pemain=="X") {
        document.getElementById("hasil").innerHTML=
        "Giliran Pemain: O"
        cariMenang()      
        pemain="O" 
    } else {
        document.getElementById("hasil").innerHTML=
        "Giliran Pemain: X"
        cariMenang()
        pemain="X"
    }
}

function cariMenang() {
    if (document.getElementById("bBelakang1").value==pemain &&
    document.getElementById("bBelakang2").value==pemain &&
    document.getElementById("bBelakang3").value==pemain    
    ){
        menang(1, 2, 3)
    }
    if (document.getElementById("bBelakang1").value==pemain &&
    document.getElementById("bBelakang4").value==pemain &&
    document.getElementById("bBelakang7").value==pemain    
    ){
        menang(1, 4, 7)
    }
    if (document.getElementById("bBelakang1").value==pemain &&
    document.getElementById("bBelakang5").value==pemain &&
    document.getElementById("bBelakang9").value==pemain    
    ){
        menang(1, 5, 9)
    }
    if (document.getElementById("bBelakang2").value==pemain &&
    document.getElementById("bBelakang5").value==pemain &&
    document.getElementById("bBelakang8").value==pemain    
    ){
        menang(2, 5, 8)
    }
    if (document.getElementById("bBelakang3").value==pemain &&
    document.getElementById("bBelakang6").value==pemain &&
    document.getElementById("bBelakang9").value==pemain    
    ){
        menang(3, 6, 9)
    }
    if (document.getElementById("bBelakang4").value==pemain &&
    document.getElementById("bBelakang5").value==pemain &&
    document.getElementById("bBelakang6").value==pemain    
    ){
        menang(4, 5, 6)
    }
    if (document.getElementById("bBelakang7").value==pemain &&
    document.getElementById("bBelakang8").value==pemain &&
    document.getElementById("bBelakang9").value==pemain    
    ){
        menang(7, 8, 9)
    }
    if (document.getElementById("bBelakang3").value==pemain &&
    document.getElementById("bBelakang5").value==pemain &&
    document.getElementById("bBelakang7").value==pemain    
    ){
        menang(3, 5, 7)
    }
}
function menang(a, b, c) {
    
    applause.play();

    document.getElementById("hasil").innerHTML="Pemenangnya Adalah Pemain "+ pemain
    let z = 1
    for (let i = 1; i <= 9; i++){
        document.getElementById("bDepan"+i).disabled="disabled"
    }


    function animasi() {
        
    if (z==1){
        document.getElementById("bBelakang"+a).style.backgroundColor = "rgb(255, 255, 255)"
        document.getElementById("bBelakang"+b).style.backgroundColor = "rgb(145, 145, 145)"
        document.getElementById("bBelakang"+c).style.backgroundColor = "rgb(74, 74, 74)"
        z=2    
    } 
    else if (z==2){
        document.getElementById("bBelakang"+c).style.backgroundColor = "rgb(255, 255, 255)"
        document.getElementById("bBelakang"+a).style.backgroundColor = "rgb(145, 145, 145)"
        document.getElementById("bBelakang"+b).style.backgroundColor = "rgb(74, 74, 74)"
        z=3    
    }
    else if (z==3){
        document.getElementById("bBelakang"+b).style.backgroundColor = "rgb(255, 255, 255)"
        document.getElementById("bBelakang"+c).style.backgroundColor = "rgb(145, 145, 145)"
        document.getElementById("bBelakang"+a).style.backgroundColor = "rgb(74, 74, 74)"
        z=1    
    }
}
setInterval (animasi, 150);
}