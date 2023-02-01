import heavensWheel from "./recourses/menu/heavensWheel.jpg";
import veggieGuccie from "./recourses/menu/veggieGuccie.jpg";

function menuLoad() {
  let menu = document.createElement("div");
  menu.classList = "menu";

  let menuItems = [
    {
      itemName: "Heavens Wheel",
      src: heavensWheel,
      itemDescription:
        "A delicious piece of heaven served in a good old pizza shape.",
    },
    {
      itemName: "Veggie Guccie",
      src: veggieGuccie,
      itemDescription:
        "A vegitarians dreams come true. A tasty piece of youth.",
    },
  ];
  for (let i = 0; i < menuItems; i++) {
    let menuItem = document.createElement("div");
    menuItem.classList = "menuItem";

    let itemName = document.createElement("p");
    itemName.classList = itemName;
    itemName.textContent = menuItems[i].itemName;

    let itemImg = new Image();
    itemImg.src = menuItems[i].src;

    let itemDescription = document.createElement("p");
    itemDescription.classList = "itemDescription";
    itemDescription.textContent = menuItems[i].itemDescription;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemImg);
    menuItem.appendChild(itemDescription);

    menu.appendChild(menuItem);
    console.log(menuItem);
  }

  return menu;
}

export default menuLoad();
