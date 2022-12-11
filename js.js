const affich = document.getElementById('counter');



const updateCounter = async ()=>{ 
    const data = await fetch('https://api.countapi.xyz/hit/touxik-timer/telecharge');
    const count = await data.json();
    affich.innerHTML =count.value+' Télèchargement ';
}

function count(){
    updateCounter();
}

