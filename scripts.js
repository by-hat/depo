const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
const buton1 = document.getElementById('burger');
let stars = [];
const numStars = 150;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.2,
    velocity: Math.random() * 0.5 + 0.2
  });
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fill();
    star.y += star.velocity;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(animateStars);
}

animateStars();

function toggleMode() {
  document.body.classList.toggle("light-mode");
  const button = document.getElementById("toggleButton");

  if (document.body.classList.contains("light-mode")) {
    button.innerText = "Light Mode";
  } else {
    button.innerText = "Dark Mode";
  }
}

function showSection(section) {
  const buttons = document.querySelectorAll('nav button');
  buttons.forEach(button => button.classList.remove('active-btn'));
  const activeButton = Array.from(buttons).find(button => button.textContent.toLowerCase().includes(section));
  if (activeButton) {
    activeButton.classList.add('active-btn');
  }

  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => {
    sec.style.display = 'none';
  });
  document.getElementById(section).style.display = 'block';
}

showSection('home');

document.getElementById("shareButton").addEventListener("click", function() {
      if (navigator.share) {
        navigator.share({
          title: 'Cilo',
          text: 'Would you like to look at Sedat\'s portfolio?',
          url: window.location.href 
        })
        .then(() => console.log("Success"))
        .catch((error) => console.log("Error ", error));
      } else {
        alert("This feature is not supported in this browser.");
      }
    });
    const text = "\u{1F4BB}  Python & C++ Dev  \n\n\n\u{1F3D4}\u{FE0F}  Mountaineer               ";
    let i = 0;

    function type() {
      if (i < text.length) {
        document.getElementById("terminal").innerText += text.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    }

    type();
document.addEventListener("keyup", function(e) {
  if (e.key === "PrintScreen") {
    alert("Taking screenshots is prohibited!");
    document.body.style.display = "none";
  }
});
window.addEventListener('offline', () => {
  Swal.fire({
    icon: 'warning',
    title: 'Disconnected',
    text: 'No internet connection detected',
    confirmButtonText: 'Confirm',
    backdrop: true,
  });
});

window.addEventListener('online', () => {
  Swal.fire({
    icon: 'success',
    title: 'Connected',
    text: 'Your internet connection is back.',
    confirmButtonText: 'Amazing',
    backdrop: true,
  });
});
document.querySelectorAll("a").forEach(a => a.setAttribute("target", "_blank"));
document.body.style.filter = "brightness(0.85)";
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
  }
});
window.addEventListener("load", function() {
  document.getElementById("preloader").classList.add("loaded");
});