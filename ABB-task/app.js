function Open() {
    var slidebar = document.getElementById('sidebar')
    var close = document.getElementById('close')
    var iconn = document.getElementById('icon')
    document.getElementById('int').style.opacity = "1";
    document.getElementById('botm').style.opacity = "1";
    slidebar.style.width = '100%';
    iconn.style.opacity = '0';
    close.style.opacity = '1';

    document.getElementById('int').style.opacity = "1";
    
}

function Close() {
    var slidebar = document.getElementById('sidebar')
    var close = document.getElementById('close')
    var iconn = document.getElementById('icon')
    slidebar.style.width = '0%';
    iconn.style.opacity = '1';
    close.style.opacity = '0';
    document.getElementById('int').style.opacity = "1";
    document.getElementById('botm').style.opacity = "0";
    
}

var check = 0;

// function Sil(){
//    var sil =  document.getElementById('section2')



    
// }

// function Sil() {
//     var element = document.getElementById("helpid");
   
//     element.classList.toggle("help");
    
    
//     document.getElementById('section2').style.opacity = '0';
//     document.getElementById("help").style.opacity = '0';

    
//  }




// var element = document.getElementById('section2')
// element.style.opacity = '0';
// var element2 = document.getElementById('helpid')
// element2.style.opacity = '1';




function Sil(){
    var element = document.getElementById('section2')
    var element2 = document.getElementById('helpid')
    if(element.style.opacity == '0'){
        element.style.opacity = '1';
        element2.style.opacity = '0';
    }else{
        element.style.opacity = '0';
        element2.style.opacity = '1';

    }
}