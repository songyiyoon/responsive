$('.tit .btn').click(function(e){
    e.preventDefault()
    $('.nav').slideToggle();
    $('.tit .btn').toggleClass("open")
    let result=$('.nav').attr("class")
    console.log(result)
    if($('.tit .btn').hasClass("open")){
        //A.attr(B) = A요소안에 있는 속성 B를 가져와라
        //A.attr(B,c) = A요소안에 있는 속성 B를 c로 바꿔라
        $('.tit .btn').find('i').attr("class","far fa-hand-point-up")
        //$('.tit .btn').find(i) - .btn 자손중에 i태그를 찾아라(css에서 띄워쓰는 의미와 유사하다)

    }else{
        $('.tit .btn').find('i').attr("class","far fa-hand-point-down")
    }
})

//이미지 슬라이드  col4
    $('.slider').slick({
        dots:true,
      //  autoplay:true,
    });
    $('.slider').slick('setPosition');
//lightGallery
    lightGallery(document.getElementById('lightGallery'), {
        plugins: [lgThumbnail],
    });
    
