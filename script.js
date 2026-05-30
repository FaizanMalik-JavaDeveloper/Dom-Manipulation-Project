let changed = false;

function changeContent() {
  const heading1 = document.getElementById("heading1");
  const heading2 = document.getElementById("heading2");
  const heading3 = document.getElementById("heading3");
  const image = document.getElementById("mainImage");

  if (!changed) {
    heading1.innerHTML = "Fresher";
    heading2.innerHTML = "Looking for <span>Jobs</span>";
    heading3.innerHTML = "MERN Stack Developer";

    image.src = "/dom2.webp";

    image.classList.add("fade");

    changed = true;
  } else {
    heading1.innerHTML = "Faizan Malik";
    heading2.innerHTML = "Intern at <span>NoviTech</span>";
    heading3.innerHTML = "B.Tech CSE Graduate";

    image.src = "/dom1.jpg";

    image.classList.add("fade");

    changed = false;
  }

  setTimeout(() => {
    image.classList.remove("fade");
  }, 800);
}
