import Logo from "./logo.png";
import Owner from "./owner.jpg";
const displayAbout = (() => {
  const content = () => {
    if (document.body.textContent == "") {
      const isContent = document.createElement("div");
      const isHeadlineContainer = document.createElement("div");
      const isHeadlineImageContainer = document.createElement("div");

      const isHeadlineList = document.createElement("ul");
      const isHeadlineListItem1 = document.createElement("li");
      const isHeadlineListItem2 = document.createElement("li");
      const isHeadlineListItem3 = document.createElement("li");
      const isBodyContainer = document.createElement("div");
      const isAbout = document.createElement("div");
      const isAboutText1 = document.createElement("p");
      const isAboutText2 = document.createElement("p");
      const isAboutFeatures1 = document.createElement("p");
      const isAboutFeatures2 = document.createElement("p");
      const isAboutFeatures3 = document.createElement("p");
      const isAboutHead = document.createElement("h2");

      const isLogo = new Image();
      const isOwner = new Image();

      isLogo.src = Logo;
      isOwner.src = Owner;
      isContent.id = "content";
      isHeadlineListItem1.id = "about";
      isHeadlineListItem2.id = "menu";
      isHeadlineListItem3.id = "contact";

      isHeadlineContainer.classList.add("headline-container");
      isHeadlineImageContainer.classList.add("headline-image-container");
      isHeadlineList.classList.add("headline-list");
      isHeadlineListItem1.classList.add("headline-list-item");
      isHeadlineListItem1.classList.add("active");
      isHeadlineListItem2.classList.add("headline-list-item");
      isHeadlineListItem3.classList.add("headline-list-item");
      isBodyContainer.classList.add("body-container");
      isAbout.classList.add("about-container");
      isOwner.classList.add("about-owner");
      isAboutText1.classList.add("about-text");
      isAboutText2.classList.add("about-text");
      isAboutFeatures1.classList.add("about-text");
      isAboutFeatures2.classList.add("about-text");
      isAboutFeatures3.classList.add("about-text");

      isHeadlineListItem1.textContent = "About mjami";
      isHeadlineListItem2.textContent = "Menu";
      isHeadlineListItem3.textContent = "Contact us";
      isAboutHead.textContent = "Become a part of the #zerowaste movement";
      isAboutText1.textContent =
        "There's a new kid in town - and it's changing the way we think about food.";
      isAboutText2.textContent =
        "It's time to stop throwing food scraps away like they didn't matter and start eating biscuits from the ground!";
      isAboutFeatures1.textContent =
        "Your new favorite restaurant mjami is your go-to for those looking for a zero waste dining experience that offers both healthy and delicious options.";
      isAboutFeatures2.textContent =
        "With our 100% local kitchen, fair pricing, and spacious tables, we make it easy for you to dine with friends and family!  Eat healthy with us!";
      isAboutFeatures3.textContent =
        "Our kitchen is run using sustainable practices and we use only reusable packaging - so you can eat guilt-free without compromising on quality.";

      isHeadlineImageContainer.appendChild(isLogo);
      isHeadlineContainer.appendChild(isHeadlineImageContainer);
      isHeadlineContainer.appendChild(isHeadlineList);
      isHeadlineList.appendChild(isHeadlineListItem1);
      isHeadlineList.appendChild(isHeadlineListItem2);
      isHeadlineList.appendChild(isHeadlineListItem3);
      isContent.appendChild(isHeadlineContainer);
      isContent.appendChild(isBodyContainer);
      isAbout.appendChild(isAboutHead);
      isAbout.appendChild(isOwner);
      isAbout.appendChild(isAboutText1);
      isAbout.appendChild(isAboutText2);
      isAbout.appendChild(isAboutFeatures1);
      isAbout.appendChild(isAboutFeatures2);
      isAbout.appendChild(isAboutFeatures3);
      isBodyContainer.appendChild(isAbout);
      document.body.appendChild(isContent);
    } else {
      const isBodyContainer = document.querySelector(".body-container");
      isBodyContainer.textContent = "";
      const isHeadlineListItem1 = document.querySelector("#about");
      const isHeadlineListItem2 = document.querySelector("#menu");
      const isHeadlineListItem3 = document.querySelector("#contact");
      const isAbout = document.createElement("div");
      const isAboutText1 = document.createElement("p");
      const isAboutText2 = document.createElement("p");
      const isAboutFeatures1 = document.createElement("p");
      const isAboutFeatures2 = document.createElement("p");
      const isAboutFeatures3 = document.createElement("p");
      const isAboutHead = document.createElement("h2");
      const isOwner = new Image();
      isOwner.src = Owner;
      isAbout.classList.add("about-container");
      isOwner.classList.add("about-owner");
      isAboutText1.classList.add("about-text");
      isAboutText2.classList.add("about-text");
      isAboutFeatures1.classList.add("about-text");
      isAboutFeatures2.classList.add("about-text");
      isAboutFeatures3.classList.add("about-text");

      isHeadlineListItem1.classList.add("headline-list-item");
      isHeadlineListItem1.classList.add("active");
      isHeadlineListItem2.classList.add("headline-list-item");
      isHeadlineListItem2.classList.remove("active");
      isHeadlineListItem3.classList.add("headline-list-item");
      isHeadlineListItem3.classList.remove("active");

      isAboutHead.textContent = "Become a part of the #zerowaste movement";
      isAboutText1.textContent =
        "There's a new kid in town - and it's changing the way we think about food.";
      isAboutText2.textContent =
        "It's time to stop throwing food scraps away like they didn't matter and start eating biscuits from the ground!";
      isAboutFeatures1.textContent =
        "Your new favorite restaurant mjami is your go-to for those looking for a zero waste dining experience that offers both healthy and delicious options.";
      isAboutFeatures2.textContent =
        "With our 100% local kitchen, fair pricing, and spacious tables, we make it easy for you to dine with friends and family!  Eat healthy with us!";
      isAboutFeatures3.textContent =
        "Our kitchen is run using sustainable practices and we use only reusable packaging - so you can eat guilt-free without compromising on quality.";

      isAbout.appendChild(isAboutHead);
      isAbout.appendChild(isOwner);
      isAbout.appendChild(isAboutText1);
      isAbout.appendChild(isAboutText2);
      isAbout.appendChild(isAboutFeatures1);
      isAbout.appendChild(isAboutFeatures2);
      isAbout.appendChild(isAboutFeatures3);
      isBodyContainer.appendChild(isAbout);
      return;
    }
  };
  return { content };
})();

export { displayAbout };
