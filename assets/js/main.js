document.addEventListener("DOMContentLoaded",function(){new SweetScroll({}),particlesJS("particles-js",{particles:{number:{value:30,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"polygon",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:19.18081918081918,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:4,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}},nb:80},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})},!1);


// Get the contact form and the button
const form = document.getElementById("contactForm");
const button = form.querySelector("button");

// Create a message <div> to show success/error messages
const message = document.createElement("div");
message.style.marginTop = "10px";
message.style.fontWeight = "bold";
message.style.textAlign = "center";
form.appendChild(message);

// Add form submit listener
form.addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent default browser form submission

  // Disable the button and show "Sending..." while waiting
  button.disabled = true;
  button.textContent = "Sending...";

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",        
      body: formData        
    });

    if (response.ok) {
      message.textContent = "✅ Message sent successfully!";
      message.style.color = "green";
      form.reset(); 
    } else {
      message.textContent = "❌ Failed to send. Try again.";
      message.style.color = "red";
    }
  } catch (error) {
    message.textContent = "❌ Network error.";
    message.style.color = "red";
  }

  // Re-enable the button
  button.disabled = false;
  button.textContent = "Send Message";

  // ✅ ✅ Hide the message after 3 seconds
  setTimeout(() => {
    message.textContent = "";
  }, 3000);
});


//   Fotter section

 const backToTopBtn = document.getElementById("backToTop");
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Animation on click
    });
  });
