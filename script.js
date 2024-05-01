// Script permettant de cacher les offres d'écoles

const host = window.location.host;

const disabledList = [
  "ISCOD",
  "Institut F2I",
  "3WRH",
  "42c",
  "MBS",
  "Wild Code School",
  "GROUPE GEMA - ESI BUSINESS SCHOOL / IA SCHOOL (Siège National)",
  "MyDigitalSchool Paris",
  "Sup de Vinci Paris",
  "L' École Multimédia",
  "Digital School of Paris",
  "3W Academy",
  "Arinfo I-maginer",
  "Aurlom",
  "La Grande Classe",
  "PST&B - Paris School of Technology & Business",
  "2i Academy - Paris",
  "Isika",
  "Studi CFA",
];

if (host === "fr.indeed.com") {
  const offerCompanyName = document.querySelectorAll(
    '[data-testid="company-name"]'
  );

  const rightPanel = document.querySelector(".jobsearch-RightPane");

  rightPanel.style.visibility = "collapse";

  offerCompanyName.forEach((company) => {
    let parentNodeElement = company.parentNode;
    while (!parentNodeElement.classList.contains("css-5lfssm")) {
      parentNodeElement = parentNodeElement.parentNode;
    }
    if (disabledList.includes(company.innerText)) {
      parentNodeElement.style.display = "none";
    } else {
      parentNodeElement.addEventListener("click", () => {
        rightPanel.style.visibility = "visible";
      });
    }
  });
}
