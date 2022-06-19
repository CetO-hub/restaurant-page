import Logo from "./logo.png";

const displayContent = (() => {
  const about = () => {
    const isContent = document.createElement("div");
    const isHeadlineContainer = document.createElement("div");
    const isHeadlineImageContainer = document.createElement("div");

    const isHeadlineList = document.createElement("ul");
    const isHeadlineListItem1 = document.createElement("li");
    const isHeadlineListItem2 = document.createElement("li");
    const isHeadlineListItem3 = document.createElement("li");
    const isBodyContainer = document.createElement("div");
    const isLogo = new Image();

    isContent.id = "content";
    isHeadlineContainer.classList.add("headline-container");
    isHeadlineImageContainer.classList.add("headline-image-container");
    isLogo.src = Logo;
    isHeadlineList.classList.add("headline-list");
    isHeadlineListItem1.classList.add("headline-list-item");
    isHeadlineListItem1.classList.add("active");
    isHeadlineListItem2.classList.add("headline-list-item");
    isHeadlineListItem3.classList.add("headline-list-item");
    isBodyContainer.classList.add("body-container");
    isHeadlineListItem1.textContent = "About mjami";
    isHeadlineListItem2.textContent = "Menu";
    isHeadlineListItem3.textContent = "Contact us";

    isHeadlineImageContainer.appendChild(isLogo);
    isHeadlineContainer.appendChild(isHeadlineImageContainer);
    isHeadlineContainer.appendChild(isHeadlineList);
    isHeadlineList.appendChild(isHeadlineListItem1);
    isHeadlineList.appendChild(isHeadlineListItem2);
    isHeadlineList.appendChild(isHeadlineListItem3);
    isContent.appendChild(isHeadlineContainer);
    isContent.appendChild(isBodyContainer);
    document.body.appendChild(isContent);
  };
  return { about };
})();

export { displayContent };
