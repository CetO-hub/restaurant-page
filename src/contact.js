const displayContact = (() => {
  const content = () => {
    const isContent = document.querySelector(".body-container");
    isContent.textContent = "";
    const isHeadlineListItem1 = document.querySelector("#about");
    const isHeadlineListItem2 = document.querySelector("#menu");
    const isHeadlineListItem3 = document.querySelector("#contact");

    isHeadlineListItem1.classList.remove("active");
    isHeadlineListItem3.classList.add("active");
    isHeadlineListItem2.classList.remove("active");
  };
  return { content };
})();

export { displayContact };
