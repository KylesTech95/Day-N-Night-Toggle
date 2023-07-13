let toggleBox = document.querySelector('.inset'),
btn = document.querySelector('.toggle-btn'),
bod = document.querySelector('.bod'),
icons = document.getElementsByTagName('i'),
header = document.querySelector('.head'),
title = document.querySelector('.title');

//mouseover/mouseleave event listeners
toggleBox.addEventListener('mouseover', () =>{
for(x of icons){
    btn.style.opacity=1;
    if(x.classList[1]=='fa-sun'){
        x.style = `text-shadow: 0 0 2px rgb(232, 224, 224);transition: .3s ease;color:#fff;`;
}
    else{
    x.style = `text-shadow: .15px .15px 4px rgb(232, 224, 224);transition: .3s ease;color:#333;`;
}
}
})
toggleBox.addEventListener('mouseleave', () =>{
    btn.style.opacity=0;
    for(x of icons){
        if(x.classList[1]=='fa-star-and-crescent'){
            x.style = `text-shadow: .07px .07px 4px #4b4a4a;transition:.2s ease;color:#fff;`
        }
        else{
            x.style = `text-shadow: ${`.15px`} .15px 4px #766e6e;transition: .3s ease;color:#333;`;
        }
    }
    })

//Toggle effect
toggleBox.addEventListener('click',(e) => {
e.preventDefault()
btn.classList.toggle('moving');
bod.style=`background: #333; transition:.3s ease;`;
let winW = bod.clientWidth
let half = winW/2
let btnPos = btn.getBoundingClientRect().x
// console.log(`half-window:`+ half)
// console.log(`btn pos:`+ btnPos)
if(btnPos > half){
    bod.style.background='#fff';
    header.style = 'background:#333;transition: .3s ease';
    title.style = 'color: silver;transition: .3s ease;'

}
else{
    bod.style.background='#333';
     header.style = 'background:#fff;transition: .3s ease';
  title.style = 'color: #333;transition: .3s ease;'

}
})
    