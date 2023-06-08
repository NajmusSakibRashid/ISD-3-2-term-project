let left=-150;
let bodyMarginLeft=50;
let jobPostContainerWidth=900;


const slideUp=()=>{
    setTimeout(()=>{
        if(left<50){
            left+=25;
            bodyMarginLeft+=25;
            jobPostContainerWidth-=25;
            // console.log(width);
            document.getElementById('side-bar').style=`left:${left}px`;
            document.getElementById('body').style=`margin-left:${bodyMarginLeft}px`;
            document.getElementById('job-post-container').style=`width:${jobPostContainerWidth}px`;
            slideUp();
        }
    },1);
}

const slideDown=()=>{
    setTimeout(()=>{
        if(left>-150){
            left-=25;
            bodyMarginLeft-=25;
            jobPostContainerWidth+=25;
            // console.log(width);
            document.getElementById('side-bar').style=`left:${left}px`;
            document.getElementById('body').style=`margin-left:${bodyMarginLeft}px`;
            document.getElementById('job-post-container').style=`width:${jobPostContainerWidth}px`;
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