let expanded = true;

function toggleAbout() {
  const about = document.getElementById("aboutText");
  const btn = document.querySelector("button");

  if (expanded) {
    about.textContent = "Hi! I'm Abhinav Srivastava.";
    btn.textContent = "Show more about me";
  } else {
    about.textContent =
      "Hi! I'm Abhinav Srivastava, a BCA 3rd-year student passionate about Cloud Engineering. I work with Linux, Bash, AWS and love building real-world cloud scripts.";
    btn.textContent = "Show less about me";
  }
  expanded = !expanded;
}
