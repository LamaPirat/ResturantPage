import Logo from "./recourses/logo.png";
import FeatureImg from "./recourses/herothaid.jpg";
import PizzaIcon from "./recourses/icon_pizza.png";
import CalendarIcon from "./recourses/icon_calendar.png";
import MenuIcon from "./recourses/icon_menu.png";
import GlutenFri from "./recourses/glutenfri.png";
import JobOffer from "./recourses/ledig.jpg";
import StudentOffer from "./recourses/student.gif";
import NewsLetter from "./recourses/news.png";

function pageLoad() {
  let content = document.createElement("div");
  content.classList = "content";
  //header
  let header = document.createElement("section");
  header.classList = "header";
  let headerImg = document.createElement("img");
  headerImg.src = Logo;
  headerImg.alt = "logo";

  header.appendChild(headerImg);

  //main
  let main = document.createElement("section");

  //featured
  let featured = document.createElement("div");
  featured.classList = "featured";
  let featuredImg = document.createElement("img");
  featuredImg.src = FeatureImg;
  featuredImg.alt = "herothaipizza";
  featured.appendChild(featuredImg);

  //actionOptions
  let actionOption = document.createElement("div");
  actionOption.classList = "actionOption";

  let options = [
    {
      src: PizzaIcon,
      alt: "icon of pizza",
      pText: "Order pizza",
    },
    {
      src: CalendarIcon,
      alt: "icon of calendar",
      pText: "Order table",
    },
    {
      src: MenuIcon,
      alt: "icon of menu",
      pText: "Resturant",
    },
  ];
  let optionDivs = [];
  for (let i = 0; i < options.length; i++) {
    optionDivs[i] = document.createElement("div");
    optionDivs[i].classList = "option";
    let optionImg = document.createElement("img");
    let text = document.createElement("p");

    optionImg.src = options[i].src;
    optionImg.alt = options[i].alt;
    text.innerHTML = options[i].pText;
    optionDivs[i].appendChild(optionImg);
    optionDivs[i].appendChild(text);
    actionOption.appendChild(optionDivs[i]);
  }

  //news
  let news = document.createElement("div");
  news.classList = "news";

  //news element 1
  let newsElement = document.createElement("div");
  newsElement.classList = "newsElement";
  let newsImg = document.createElement("img");
  newsImg.src = GlutenFri;
  newsImg.alt = "glutenfree choice";
  newsElement.appendChild(newsImg);
  news.appendChild(newsElement);

  //news element 2
  newsElement.removeChild(newsImg);
  newsImg.src = JobOffer;
  newsImg.alt = "job offer";
  newsElement.appendChild(newsImg);
  news.appendChild(newsElement);

  //news element 3
  newsElement.removeChild(newsImg);
  newsImg.src = StudentOffer;
  newsImg.alt = "student offer";
  newsElement.appendChild(newsImg);
  news.appendChild(newsElement);

  //news element 4
  newsElement.removeChild(newsImg);
  newsImg.src = NewsLetter;
  newsImg.alt = "news letter";
  newsElement.appendChild(newsImg);
  news.appendChild(newsElement);

  main.appendChild(featured);
  main.appendChild(actionOption);
  main.appendChild(news);

  content.appendChild(header);
  content.appendChild(main);

  return content;
}

export default pageLoad();
