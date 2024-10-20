
const ExitBut = document.getElementById('ExitButton');
const FullBut = document.getElementById('FullButton');

const LoaderDiv = document.getElementById("Loader");


// Button OnClickEvents

ExitBut.addEventListener('click', (event)=>{
    event.preventDefault();

    window.close();

})
FullBut.addEventListener('click', (event)=>{
    let elem = document.documentElement;
    event.preventDefault();
    if(!document.fullscreenElement){
        elem.requestFullscreen();
    }else{
        document.exitFullscreen();
    }

})


document.addEventListener("DOMContentLoaded", function() {
    LoaderDiv.classList.add('show');
    setTimeout(()=>{
        LoaderDiv.classList.remove('show');
    },600)
})