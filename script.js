var tl = gsap.timeline();

gsap.from("#loader h1",{
    y: 100,
    opacity: 0,
    duration: 3.2,
    delay: 0.01,
    ease: "power4.inOut"
})

tl.from("#counter h2",{
    opacity: 0,
    delay: 0.3,
    onStart: function(){
        var h2 = document.querySelector("#counter h2")
        var count = 0;
        setInterval(function(){
        if(count<100){
        count++;
        h2.innerHTML = count
    }else{
        h2.innerHTML = count;
    }
    },30);
    },
})

tl.to("#loader", {
    duration: 2,
    delay: 2.5,
    onComplete: function() {
      var loader = document.getElementById('loader')
      loader.style.display = 'none';
    }
  })

tl.from("#page1", {
    y: 1000,
    duration: 0.7
  })

