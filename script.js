let notWorkingLinks = document.querySelectorAll('[ href="#" ]');

for (let i = 0; i < notWorkingLinks.length; i++) {
  notWorkingLinks[i].addEventListener("click", function () {
    alert("Will be later");
  });
}
