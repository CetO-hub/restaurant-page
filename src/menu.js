import MainDish from "./main.jpg";
import Pizza from "./pizza.jpg";
import Dessert from "./dessert.jpg";
import Drink from "./drink.jpg";

const displayMenu = (() => {
  const content = () => {
    const isContent = document.querySelector(".body-container");
    isContent.textContent = "";
    const isHeadlineListItem1 = document.querySelector("#about");
    const isHeadlineListItem2 = document.querySelector("#menu");
    const isHeadlineListItem3 = document.querySelector("#contact");

    const isMenuContainer = document.createElement("div");
    const isMainDish = document.createElement("h2");
    const isMenu1Container = document.createElement("div");
    const isMenu1InfoContainer = document.createElement("div");
    const isMenu1Name = document.createElement("h3");
    const isMenu1Description = document.createElement("p");
    const isPrice1Container = document.createElement("div");
    const isMenu1Price = document.createElement("div");
    const isMenu1PriceTag = document.createElement("div");
    const isMenu1Image = new Image();
    const isPizza = document.createElement("h2");
    const isMenu2Container = document.createElement("div");
    const isMenu2InfoContainer = document.createElement("div");
    const isMenu2Name = document.createElement("h3");
    const isMenu2Description = document.createElement("p");
    const isPrice2Container = document.createElement("div");
    const isMenu2Price = document.createElement("div");
    const isMenu2PriceTag = document.createElement("div");
    const isMenu2Image = new Image();
    const isDesserts = document.createElement("h2");
    const isMenu3Container = document.createElement("div");
    const isMenu3InfoContainer = document.createElement("div");
    const isMenu3Name = document.createElement("h3");
    const isMenu3Description = document.createElement("p");
    const isPrice3Container = document.createElement("div");
    const isMenu3Price = document.createElement("div");
    const isMenu3PriceTag = document.createElement("div");
    const isMenu3Image = new Image();
    const isDrinks = document.createElement("h2");
    const isMenu4Container = document.createElement("div");
    const isMenu4InfoContainer = document.createElement("div");
    const isMenu4Name = document.createElement("h3");
    const isMenu4Description = document.createElement("p");
    const isPrice4Container = document.createElement("div");
    const isMenu4Price = document.createElement("div");
    const isMenu4PriceTag = document.createElement("div");
    const isMenu4Image = new Image();

    isMainDish.textContent = "Main Dishes";
    isPizza.textContent = "Pizza";
    isDesserts.textContent = "Desserts";
    isDrinks.textContent = "Drinks";

    isMenu1Name.textContent = "Seared Honey Duck Breast";
    isMenu1Description.textContent =
      "Spoil yourself! Our classic dish is pure luxury so, you’ll want to savour it. Plump duck breasts roasted with sweet Chantenay carrots in a rich redcurrant and red wine sauce and roasted garlic mash. Relax and enjoy...";
    isMenu1Price.textContent = "Price:";
    isMenu1PriceTag.textContent = "18$";
    isMenu1Image.src = MainDish;

    isMenu2Name.textContent = "Prosciutto e funghi pizza";
    isMenu2Description.textContent =
      "Prosciutto e funghi is a pizza variety that is topped with tomato sauce, mozzarella, thin slices of prosciutto cotto, and mushrooms. Some varieties can be topped with olives or served drizzled with olive oil.";
    isMenu2Price.textContent = "Price:";
    isMenu2PriceTag.textContent = "12$";
    isMenu2Image.src = Pizza;

    isMenu3Name.textContent = "Nutella Crepes with Strawberries";
    isMenu3Description.textContent =
      "The ultimate crepe experience – Nutella Crepes!! Tender crepes slathered with Nutella and stuffed with strawberries, the only problem with these is portion control. Just one more crepe, just one more….";
    isMenu3Price.textContent = "Price:";
    isMenu3PriceTag.textContent = "8$";
    isMenu3Image.src = Dessert;

    isMenu4Name.textContent = "Tropical Strawberry Milkshake";
    isMenu4Description.textContent =
      "A thick, creamy milkshake with a tropical note to cool you off on a hot Summer day!";
    isMenu4Price.textContent = "Price:";
    isMenu4PriceTag.textContent = "12$";
    isMenu4Image.src = Drink;

    isHeadlineListItem1.classList.remove("active");
    isHeadlineListItem3.classList.remove("active");
    isHeadlineListItem2.classList.add("active");
    isMenuContainer.classList.add("menu-container");
    isMenu1Container.classList.add("different-menus-container");
    isMenu2Container.classList.add("different-menus-container");
    isMenu3Container.classList.add("different-menus-container");
    isMenu4Container.classList.add("different-menus-container");
    isPrice1Container.classList.add("price-container");
    isPrice2Container.classList.add("price-container");
    isPrice3Container.classList.add("price-container");
    isPrice4Container.classList.add("price-container");

    isMenu1InfoContainer.appendChild(isMenu1Name);
    isMenu1InfoContainer.appendChild(isMenu1Description);
    isPrice1Container.appendChild(isMenu1Price);
    isPrice1Container.appendChild(isMenu1PriceTag);
    isMenu1InfoContainer.appendChild(isPrice1Container);
    isMenu1Container.appendChild(isMenu1Image);
    isMenu1Container.appendChild(isMenu1InfoContainer);

    isMenu2InfoContainer.appendChild(isMenu2Name);
    isMenu2InfoContainer.appendChild(isMenu2Description);
    isPrice2Container.appendChild(isMenu2Price);
    isPrice2Container.appendChild(isMenu2PriceTag);
    isMenu2InfoContainer.appendChild(isPrice2Container);
    isMenu2Container.appendChild(isMenu2Image);
    isMenu2Container.appendChild(isMenu2InfoContainer);

    isMenu3InfoContainer.appendChild(isMenu3Name);
    isMenu3InfoContainer.appendChild(isMenu3Description);
    isPrice3Container.appendChild(isMenu3Price);
    isPrice3Container.appendChild(isMenu3PriceTag);
    isMenu3InfoContainer.appendChild(isPrice3Container);
    isMenu3Container.appendChild(isMenu3Image);
    isMenu3Container.appendChild(isMenu3InfoContainer);

    isMenu4InfoContainer.appendChild(isMenu4Name);
    isMenu4InfoContainer.appendChild(isMenu4Description);
    isPrice4Container.appendChild(isMenu4Price);
    isPrice4Container.appendChild(isMenu4PriceTag);
    isMenu4InfoContainer.appendChild(isPrice4Container);
    isMenu4Container.appendChild(isMenu4Image);
    isMenu4Container.appendChild(isMenu4InfoContainer);

    isMenuContainer.appendChild(isMainDish);
    isMenuContainer.appendChild(isMenu1Container);
    isMenuContainer.appendChild(isPizza);
    isMenuContainer.appendChild(isMenu2Container);
    isMenuContainer.appendChild(isDesserts);
    isMenuContainer.appendChild(isMenu3Container);
    isMenuContainer.appendChild(isDrinks);
    isMenuContainer.appendChild(isMenu4Container);
    isContent.appendChild(isMenuContainer);
  };
  return { content };
})();

export { displayMenu };
