const swiper = new Swiper('.swiper-unboard', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    initialSlide:1,
    autoplay: {
      delay: 5000,
    },
    // And if we need scrollbar
    /*scrollbar: {
      el: '.swiper-scrollbar',
    },*/
  });
  const swiper2 = new Swiper('.galeri__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    autoplay: false,
    spaceBetween: 50,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.item-right',
      prevEl: '.item-left',
    },
    breakpoints:{
      200:{
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      320:{
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      464:{
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 38
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 38
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1274:{
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      /*1920: {
        slidesPerView: 3,
        slidesPerGroup: 3
      }*/
    }
    // And if we need scrollbar
    /*scrollbar: {
      el: '.swiper-scrollbar',
    },*/
  });
  /*const swiper6 = new Swiper('.galeri__swiper_1024', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    autoplay: false,
    spaceBetween: 34,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.item-right',
      prevEl: '.item-left',
    },
    /*breakpoints:{
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1920: {
        slidesPerView: 3,
        slidesPerGroup: 3
      }
    }*/
    // And if we need scrollbar
    /*scrollbar: {
      el: '.swiper-scrollbar',
    },*/
 /* });*/
  /*const swiper7 = new Swiper('.galeri__swiper_768', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    autoplay: false,
    spaceBetween: 34,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.item-right',
      prevEl: '.item-left',
    },
    breakpoints:{
      320:{
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      464:{
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      768:{
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    }

  });*/

  /*const swiper5 = new Swiper('.galeri__swiper_320', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    autoplay: false,

    // If we need pagination
    pagination: {
      el: '.galery__block-title-pages',
      type: 'fraction',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.item-right',
      prevEl: '.item-left',
    },
    /*breakpoints:{

      /*768: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2
      }
    }*/
    // And if we need scrollbar
    /*scrollbar: {
      el: '.swiper-scrollbar',
    },*/
  /*});*/

  const swiper3 = new Swiper('.swiper-events',{
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    autoplay: false,
    spaceBetween: 50,

    navigation: {
      nextEl: '.events-block__next',
    },
    breakpoints:{
      1024:{
        spaceBetween: 27,
      },
      1274:{
        spaceBetween: 50,
      },
    }
  });
  const swiper8 = new Swiper('.swiper-events-1024',{
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    autoplay: false,
    spaceBetween: 27,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      /*type: 'fraction',*/
    },
    breakpoints:{
      200:{
        slidesPerView: 1,
      },
      320:{
        slidesPerView: 1,
        /*spaceBetween: 15,*/
      },
      464:{
        slidesPerView: 2,
      },
      768:{
        slidesPerView: 3,
      },
      1024:{
        slidesPerView: 3,
        spaceBetween: 27,
      }
    },

    /*navigation: {
      nextEl: '.events-block__next',
    },*/
  });
  const swiper4 = new Swiper('.projects__block-item2',{
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    autoplay: false,
    spaceBetween: 50,

    navigation: {
      nextEl: '.projects__block-right',
      prevEl: '.projects__block-left',
    },
    breakpoints:{
      200:{
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      320:{
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      464:{
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      768:{
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },
      1024:{
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    },

  })
