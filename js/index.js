
window.onload = function (){

    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        // speed: 1000,
        effect:'coverflow',
        autoplay: {
            delay:6000,
            disableOnInteraction:false
        },
        // pauseOnMouseEnter:true,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            // nextEl: '.swiper-button-next',
            // prevEl: '.swiper-button-prev',
        }

        
})
    
    var header = document.getElementById('header');
    // 滚动显示bgc
    window.onscroll = function (){
        var bannerH = document.querySelector('.banner').offsetHeight;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop ;
        
        if(scrollTop>0){
            header.style.backgroundColor="rgba(222, 26, 30, "+scrollTop/bannerH+")";
        } else {
            header.style.backgroundColor="transparent";
        }
    }
    // 秒杀定时器
    var countDowm = document.querySelector('.count-down');
    var times = countDowm.children;
    var h = parseInt(times[0].innerText+times[1].innerText);
    var m = parseInt(times[3].innerText+times[4].innerText);
    var s = parseInt(times[6].innerText+times[7].innerText);
    var totalTime = s + m * 60 + h * 3600;
    var timerID = setInterval(function (){
        totalTime--;
        h = parseInt(totalTime/3600) ;
        m = parseInt((totalTime-h*3600)/60) ;
        s =  totalTime - h*3600 -m*60;
        times[0].innerText = parseInt(h/10);
        times[1].innerText = parseInt(h%10);
        times[3].innerText = parseInt(m/10);
        times[4].innerText = parseInt(m%10);
        times[6].innerText = parseInt(s/10);
        times[7].innerText = parseInt(s%10);
        if(totalTime==0){
            totalTime=7200;
        }
    },1000)
}
