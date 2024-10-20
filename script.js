
const ExitBut = document.getElementById('ExitButton');
const FullBut = document.getElementById('FullButton');

let IsFull


// Button OnClickEvents

ExitBut.addEventListener('click', (event)=>{
    event.preventDefault();
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