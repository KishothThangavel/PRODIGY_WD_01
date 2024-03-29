const img=document.querySelectorAll('.header-slider ul img');
const pbtn=document.querySelector('.control_prev');
const nbtn=document.querySelector('.control_next');

let n=0;

function displayimg()
{
    for(let i=0;i<img.length;i++)
    {
        img[i].style.display='none';
    }
    img[n].style.display='block';
}

pbtn.addEventListener('click',(e)=>{
    if(n>0)
    {
        n--;
    }
    else{
        n=img.length-1;
    }
    displayimg();
  
})

nbtn.addEventListener('click',(e)=>{
    if(n<img.length-1)
    {
        n++;
    }
    else{
        n=0;
    }
    displayimg();
  
})