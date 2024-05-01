// Script permettant de cacher les offres d'écoles

const offerCompanyName = document.querySelectorAll(
  '[data-testid="company-name"]'
);

const rightPanel = document.querySelector(".jobsearch-RightPane");

const websiteHostList = ["fr.indeed.com"];

const disabledList = [
  "ISCOD",
  "Institut F2I",
  "3WRH",
  "42c",
  "MBS",
  "Wild Code School",
];

offerCompanyName.forEach((company) => {
  if (disabledList.includes(company.innerText)) {
    let parentNodeElement = company.parentNode;
    while (!parentNodeElement.classList.contains("css-5lfssm")) {
      parentNodeElement = parentNodeElement.parentNode;
    }
    parentNodeElement.style.display = "none";
  }
});

console.log(window.location.host);
