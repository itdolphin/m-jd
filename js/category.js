
window.addEventListener('load',function(){
    


    // 1.左侧滑动
    var swiper1 = new Swiper("#main .left.mySwiper1", {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        // // scrollbar: {
        // //   el: ".left .swiper-scrollbar",
        // // },
        mousewheel: true,
      });
    // 2.右侧滑动
    var swiper2 = new Swiper("#main .right.mySwiper2", {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        // // scrollbar: {
        // //   el: ".left .swiper-scrollbar",
        // // },
        // mousewheel: true,
        // preventClicks:true
      });
    //   3.点击li 所在li置顶
    ceilingTop();
    function ceilingTop() {
        var lis = document.querySelectorAll('#main .left li');
        var swiperWrapper = document.querySelector('#main .left .swiper-wrapper');
        var ul = document.querySelector('#main .left ul');
        var maxDistance = ul.offsetHeight - swiperWrapper.offsetHeight;
        for(var i=0;i<lis.length;i++){
            lis[i].dataset['index'] = i ;
            lis[i].addEventListener('click',function(){
                var index = this.dataset['index'];
                var distanceY = index * this.offsetHeight;
                console.log(distanceY);
                // 吸顶
                if(distanceY > maxDistance){
                    swiperWrapper.style.transform = "translate3d(0px,-"+maxDistance+"px,0px)";
                } else {
                    swiperWrapper.style.transform = "translate3d(0px,-"+distanceY+"px,0px)";
                }
                swiperWrapper.style.transition = "all 0.3s";
                // 修改li的class
                for(var j=0;j<lis.length;j++){
                    if(j!=index){
                        lis[j].classList.remove('active');
                    } else {
                        lis[j].classList.add('active');
                    }
                }            
            })
        }
    }



})