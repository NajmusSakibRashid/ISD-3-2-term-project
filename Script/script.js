let left=-150;

const slideUp=()=>{
    setTimeout(()=>{
        if(left<50){
            left+=25;
            // console.log(width);
            document.getElementById('side-bar').style=`left:${left}px`;
            slideUp();
        }
    },1);
}

const slideDown=()=>{
    setTimeout(()=>{
        if(left>-150){
            left-=25;
            // console.log(width);
            document.getElementById('side-bar').style=`left:${left}px`;
            slideDown();
        }
    },1);
}

document.getElementById('side-bar-icon').addEventListener('click',()=>{
    if(left>-150)
        slideDown();
    else
        slideUp();
})