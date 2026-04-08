const but = document.querySelector('.button');
const news = document.querySelector('.news');
but.addEventListener("click" ,function(){
    news.classList.toggle('hide');
    
});

const mybutton = document.getElementById('submit');

mybutton.addEventListener("click" , function(){
    const myname = document.getElementById('name').value;
    const mysname = document.getElementById('sname').value;
    const old = document.getElementById('select').value;

    if(!myname || !mysname){
        alert("กรุณาใส่ชื่อให้ครบถ้วน");
        return;
    }
    console.log("ชื่อ: "+myname +" "+"นามสกุล: "+ mysname+" "+old+" years old");
    document.getElementById('show').innerHTML="ชื่อ: "+myname +" "+"นามสกุล: "+ mysname+" "+old+" years old";
});
