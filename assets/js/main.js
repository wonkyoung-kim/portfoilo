$(window).on('load', function(){
  // mainScript.clickFnc();
  // mainScript.scrollFnc();
  // mainScript.mouseFnc();
  mainScript.gsapFnc();
})

const mainScript = {
  gsapFnc: function(){
    gsap.set('.sc-visual .sc-title span', {
      rotateX: 90,
      skewY: 15,
      rotateY: 10,
      opacity: 0,
    })
    gsap.to('.sc-visual .sc-title span', {
      rotateX: 0,
      skewY: 0,
      rotateY: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
    })
    const mainTitle = gsap.timeline({
      scrollTrigger: {
        trigger: '.sc-visual',
        start: 'top top',
        end: '+=100%',
        // markers: true,
        scrub: 1,
      },
    })
    mainTitle
    .addLabel('a')
    // .to('.sc-visual .sc-title span:nth-child(1)', {xPercent: -100}, 'a')
    // .to('.sc-visual .sc-title span:nth-child(2)', {xPercent: 100}, 'a')
    // .to('.sc-visual .sc-title span:nth-child(3)', {xPercent: -100}, 'a')
    // .to('.sc-visual .sc-title span:nth-child(4)', {xPercent: 100}, 'a')






    // const aboutAni = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.sc-about',
    //     start: '30% 80%',
    //     end: '+=350%',
    //     markers: true, 
    //     scrub: 1,
    //   }
    // })
    // aboutAni
    // .addLabel('a')
    // .from('.sc-about .img-box', {yPercent: 30}, 'a')
    // .from('.sc-about .img-box img', {scale: 1.5}, 'a')
    // // .from('.sc-about .txt-box::before', {height: 0}, 'a+=1')
    // .from('.sc-about .desc span', {yPercent: 100, stagger: 0.2}, 'a+=1')


    dataChild = document.querySelectorAll('[data-y]');

    dataChild.forEach(element => {
      y = (element.dataset.y) ?element.dataset.y : 0;
      x = (element.dataset.x) ?element.dataset.x : 0;
      r = (element.dataset.r) ?element.dataset.r : 0;

      gsap.to(element, {
        scrollTrigger: {
          trigger: '.sc-visual',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        yPercent:y,
        xPercent:x,
        rotation:r
      })
    });

    gsap.from('.sc-about .img-box', {
      scrollTrigger: {
        trigger: '.sc-about',
        start: '30% 80%',
        end: 'bottom bottom',
        // markers: true, 
        scrub: 1,
      },
      yPercent: 30
    })
    gsap.from('.sc-about .img-box img', {
      scrollTrigger: {
        trigger: '.sc-about',
        start: '30% 80%',
        end: 'bottom bottom',
        // markers: true, 
        scrub: 1,
      },
      scale: 1.5
    })
    gsap.from('.sc-about .txt-box .desc span', {
      scrollTrigger: {
        trigger: '.sc-about',
        start: '30% top',
        end: 'bottom 80%',
        // markers: true, 
        // scrub: 1,
      },
      yPercent: 100, 
      stagger: 0.2
    })



    gsap.from('.sc-work .work-list .work-item', {
      scrollTrigger: {
        trigger: '.sc-work',
        start: 'top 80%',
        end: 'bottom bottom',
        markers: true,
        // scrub: 1,
      },
      duration: 1,
      stagger: 0.2,
      // marginTop: 500
      xPercent: -100,
    })






    gsap.from('.footer .footer-wrap', {
      scrollTrigger: {
        trigger: '.footer',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
        markers: true,
      },
      yPercent: -50,
      opacity: 0,
    })
    gsap.from('.footer .title-area span', {
      scrollTrigger: {
        trigger: '.footer',
        start: 'top bottom',
        end: 'bottom bottom',
        // scrub: 2,
        // markers: true,
      },
      yPercent: -50,
      opacity: 0,
      stagger: 0.2
    })
  },  
}