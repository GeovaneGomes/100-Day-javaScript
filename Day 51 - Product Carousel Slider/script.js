const thumbnails = document.getElementsByClassName("thumbnail");
const slider = document.getElementById("slider");
const nextBtn = document.getElementById("slide-right");
const prevBtn = document.getElementById("slide-left");

nextBtn.addEventListener("click", () => {
  scrollAmount = 0;
  let sliderTimer = setInterval(() => {
    slider.scrollLeft += 10;
    scrollAmount += 10;
    if (scrollAmount >= 100) {
      window.clearInterval(sliderTimer);
    }
  }, 25);
});

prevBtn.addEventListener("click", () => {
  scrollAmount = 0;
  let sliderTimer = setInterval(() => {
    slider.scrollLeft -= 10;
    scrollAmount += 10;
    if (scrollAmount >= 100) {
      window.clearInterval(sliderTimer);
    }
  }, 25);
});


// SLIDER WIDTH VALUES
//function sw() {
//  alert(slider.scrollWidth);
//}

//function sl() {
//  alert(slider.scrollLeft);
//}

//function cw() {
//  alert(slider.clientWidth);
//}

//function calc() {
//  alert(slider.scrollWidth - slider.clientWidth);
//}



// AUTO PLAY FUNCTION
function autoPlay() {
  if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 1) {
    slider.scrollLeft = 0;
  } else {
    slider.scrollLeft += 1;
  }
}

let play = setInterval(autoPlay, 10);

// Pause the slider on hover
for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("mouseover", () => {
    clearInterval(play);
  });

  thumbnails[i].addEventListener("mouseout", () => {
    return (play = setInterval(autoPlay, 10));
  });
}
