// const affich = document.getElementById('counter');



// const updateCounter = async ()=>{ 
//     const data = await fetch('https://api.countapi.xyz/hit/touxik-timer/telecharge');
//     const count = await data.json();
//     affich.innerHTML =count.value+' Télèchargement ';
// }

// function count(){
//     updateCounter();
// }


const downloadBtn1 = document.getElementById('downloadBtn1');
const downloadBtn2 = document.getElementById('downloadBtn2');
const dialog = document.getElementById('dialog');
const emailInput = document.getElementById('emailInput');
const confirmBtn = document.getElementById('confirmBtn');

let downloadCount = 0;



downloadBtn1.addEventListener('click', () => {
    dialog.style.display = 'block';
});
downloadBtn2.addEventListener('click', () => {
    dialog.style.display = 'block';
});

emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== '') {
        confirmBtn.disabled = false;
    } else {
        confirmBtn.disabled = true;
    }
});

confirmBtn.addEventListener('click', () => {
    if (emailInput.value.trim() !== '') {
        sendMail();
    
    }
});


    function sendMail(){
      var params ={
        email : document.getElementById("emailInput").value
      }
    
    const servicID = "service_aaf8zbi";
    const templateID = "template_tvwlb5o";
    emailjs.send(servicID,templateID,params).then((res)=>{
        document.getElementById("emailInput").value="";
      
        cosole.log(res);
        alert("Merci !!!");
        }).catch((err)=> console.log(err));
        alert("Merci !!!");
    }




