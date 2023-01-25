function pageLoad() {
  let content = document.querySelector("#content");
  //header
  let header = document.createElement("section");
  header.classList = "header";
  let headerImg = document.createElement("img");
  headerImg.src = "/recourses/logo.png";
  headerImg.alt = "logo";

  header.appendChild(headerImg);

  //main
  let main = document.createElement("section");

  //featured
  let featured = document.createElement("div");
  featured.classList = featured;
  let featuredImg = document.createElement("img");
  featuredImg.src = "/recourses/herothaid.jpg";
  featuredImg.alt = "herothaipizza";
  featured.appendChild(featuredImg);

  //actionOptions
  let actionOption = document.createElement("div");
  actionOption.classList = actionOption;

  //Option1
  let option = document.createElement("div");
  option.classList = "option";
  let optionImg = document.createElement("img");
  optionImg.src = "/recourses/icon_pizza.png";
  optionImg.alt = "icon of pizza";
  let text = document.createElement("p");
  text.innerHTML = "Order pizza";
  option.appendChild(optionImg);
  option.appendChild(text);
  actionOption.appendChild(option);

  //Option2
  option.removeChild(optionImg);
  option.removeChild(text);
  optionImg.src = "/recourses/icon_calendar.png";
  optionImg.alt = "icon of calendar";
  text.innerHTML = "Order table";
  option.appendChild(optionImg);
  option.appendChild(text);
  actionOption.appendChild(option);

  //Option3
  option.removeChild(optionImg);
  option.removeChild(text);
  optionImg.src = "/recourses/icon_menu.png";
  optionImg.alt = "icon of menu";
  text.innerHTML = "Resturant";
  option.appendChild(optionImg);
  option.appendChild(text);
  actionOption.appendChild(option);

  //news
  let news = document.createElement("div");
  news.classList = "news";

  //news element 1
  let newsElement = document.createElement("div");
  newsElement.classList = "newsElement";
  let newsImg = document.createElement("img");
  newsImg.src = "/recourses/glutenfri.png";
  newsImg.alt = "glutenfree choice";
  newsElement.appendChild(newsImg);
  news.appendChild(newsElement);

  //news element 2
  newsElement.removeChild(newsImg);
  newsImg.src = "/recourses/ledig.jpg";
  newsImg.alt = "job offer";
  newsElement.appendChild(newsImg);
  news.appendChild(newsElement);

  //news element 3
  newsElement.removeChild(newsImg);
  newsImg.src = "/recourses/student.gif";
  newsImg.alt = "student offer";
  newsElement.appendChild(newsImg);
  news.appendChild(newsElement);

  //news element 4
  newsElement.removeChild(newsImg);
  newsImg.src = "/recourses/news.png";
  newsImg.alt = "news letter";
  newsElement.appendChild(newsImg);
  news.appendChild(newsElement);

  main.appendChild(featured);
  main.appendChild(actionOption);
  main.appendChild(news);

  content.appendChild(header);
  content.appendChild(main);
}

export default pageLoad();
