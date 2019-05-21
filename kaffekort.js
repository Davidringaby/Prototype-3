

Cookies.set('clip', '10', { expires: 7 });

let klip = Cookies.get('clip');

function tilfojKlip () {
    klip = klip + 10;
}

function brugKlip (){
    klip = klip - 1;
}

let klipDiv = document.querySelector('#antalClip');
let skipskup = document.createTextNode(klip);
klipDiv.appendChild(skipskup);

document.querySelector('.bittun').addEventListener('click', (e)=>{
    e.preventDefault();

    tilfojKlip();
    addClip();
});

document.querySelector('.button').addEventListener('click', (e)=>{
    e.preventDefault();

    brugKlip();
    useClip();
});


function useClip() {
    klipDiv.innerHTML = '';
    let klipsen = document.createTextNode(klip);
    klipDiv.appendChild(klipsen);
}
function addClip() {
    klipDiv.innerHTML = '';
    let klipsen = document.createTextNode(klip);
    klipDiv.appendChild(klipsen);
}






console.log(klip);
