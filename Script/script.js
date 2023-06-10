let left = -150;
let bodyMarginLeft = 50;
let PostContainerWidth = 900;


const slideUp = () => {
    setTimeout(() => {
        if (left < 50) {
            left += 25;
            bodyMarginLeft += 25;
            PostContainerWidth -= 25;
            document.getElementById('side-bar').style = `left:${left}px`;
            document.getElementById('body').style = `margin-left:${bodyMarginLeft}px`;
            // document.getElementById('post-container').style=`width:${PostContainerWidth}px`;
            slideUp();
        }
    }, 1);
}

const slideDown = () => {
    setTimeout(() => {
        if (left > -150) {
            left -= 25;
            bodyMarginLeft -= 25;
            PostContainerWidth += 25;
            document.getElementById('side-bar').style = `left:${left}px`;
            document.getElementById('body').style = `margin-left:${bodyMarginLeft}px`;
            // document.getElementById('post-container').style=`width:${PostContainerWidth}px`;
            slideDown();
        }
    }, 1);
}

document.getElementById('side-bar-icon').addEventListener('click', () => {
    if (left > -150) {
        slideDown();
    }
    else {
        slideUp();
    }
})

let currSlide = {
    bestDeal: 0,
    popularItems: 0,
    bestSellers: 0
};

const showSlide = (index, elementsToShow, category) => {
    // console.log(category);
    let posts = document.getElementById(category).children;
    currSlide[category] = index = (posts.length + index) % posts.length;
    for (let i = 0; i < posts.length; i++) {
        posts[i].style = 'display:none;';
    }
    for (let i = index; i < index + elementsToShow; i++) {
        posts[(posts.length + i) % posts.length].style = 'display:flex;';
    }
}

for (let category in currSlide) {
    showSlide(currSlide[category], 3,category);
}

const angleLeft = document.getElementsByClassName('angle-left')

// console.log(angleLeft.length);

for (let i = 0; i < angleLeft.length; i++) {
    angleLeft[i].addEventListener('click', (event) => {
        const category=event.target.dataset.value;
        showSlide(currSlide[category] -= 3, 3,category);
    })
}

const angleRight = document.getElementsByClassName('angle-right')

for (let i = 0; i < angleRight.length; i++) {
    angleRight[i].addEventListener('click', (event) => {
        const category=event.target.dataset.value;
        showSlide(currSlide[category] += 3, 3,category);
    })
}