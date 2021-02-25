'use strict';
{
    const targetElement = document.querySelectorAll('.animationTarget'); //要素を配列で取得

    document.addEventListener('scroll', () => { //スクロールするたびに取得
        for (let i = 0; i < targetElement.length; i++) {
            const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .6 //上からの距離を取得,  clientHeightはliの高さ
            
            if (window.innerHeight > getElementDistance) {//window.innerHeight現在のブラウザの高さ
                targetElement[i].classList.add('show');
            }

        }
    });

}