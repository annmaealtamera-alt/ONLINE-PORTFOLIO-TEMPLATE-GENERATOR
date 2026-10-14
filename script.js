
const form = document.getElementById("portfolioForm");
const preview = document.getElementById("portfolioPreview");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);

  document.getElementById("previewName").textContent =
    data.get("fullName");
  document.getElementById("previewEmail").textContent =
    data.get("email");
  document.getElementById("previewAbout").textContent =
    data.get("about");
  document.getElementById("previewSkills").textContent =
    data.get("skills") || "Not added yet";
  document.getElementById("previewEducation").textContent =
    data.get("education") || "Not added yet";
  document.getElementById("previewProjects").textContent =
    data.get("projects") || "Not added yet";

  preview.hidden = false;
  message.textContent = "Preview generated successfully!";
  message.style.color = "#ff3434";

  preview.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

document.getElementById("editPortfolio").addEventListener("click", () => {
  preview.hidden = true;
  document.getElementById("create").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});


const templateButtons = document.querySelectorAll(".template-btn");

templateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const chosenTemplate = button.dataset.template;
    const portfolioPreview = document.getElementById("portfolioPreview");

    portfolioPreview.dataset.template = chosenTemplate;

    templateButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });
  });
});

