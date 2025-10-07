const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

const hoverSign = document.querySelector('.hover-sign');

const videoList = [video1, video2, video3];

videoList.forEach(function(video){
    video.addEventListener("mouseover", function(){
        video.play();
        hoverSign.classList.add("active");
    });
    video.addEventListener("mouseout", function(){
        video.pause();
        hoverSign.classList.remove("active");
    });
});

// Sidebar toggle
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
});

// Safe trim function to avoid errors
function safeTrim(str) {
    return (typeof str === 'string') ? str.trim() : '';
}


    


 const form = document.getElementById("contactForm");
  const thankYouMessage = document.getElementById("thankYouMessage");

  form.addEventListener("submit", async function(e) {
    e.preventDefault(); // stop default redirect

    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.reset(); // clear inputs
      thankYouMessage.style.display = "block"; // show success message
    } else {
      alert(" Oops! Something went wrong. Try again later.");
    }
  });