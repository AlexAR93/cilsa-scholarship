const form=document.getElementById('form');
const changeStyle=document.getElementById('change-style');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputs = form.querySelectorAll('input');

    alert('Tus datos han sido enviados correctamente');
    
    inputs.forEach(input => input.value = ''); 
})

changeStyle.addEventListener('click',()=>{
    const linkCss=document.getElementById('theme');
    const currentAttribute=linkCss.getAttribute('href');
    if(currentAttribute=='./css/style.css'){
        linkCss.setAttribute('href', './css/alternative-style.css');
    }else{
        linkCss.setAttribute('href', './css/style.css')
    }
})