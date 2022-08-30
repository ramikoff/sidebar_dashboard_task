const navLabel = document.querySelector(".nav-label");
const mainArrow = document.querySelector(".main-arrow");
const sidebar = document.querySelector(".sidebar");
const menuItems = document.querySelectorAll(".menu-item");
const hidingElements = document.querySelectorAll(".hiding-element");
const burger = document.querySelector(".burger-icon");
const cover = document.querySelector(".cover");

const showSidebar = () => {
  sidebar.style.display = "block";
  cover.style.display = "block";
};

const hideCover = () => {
  cover.style.display = "none";
  sidebar.style.display = "none";
};

const collapseSidebar = () => {
  if (sidebar.classList.contains("sidebar__small")) {
    setTimeout(() => {
      hidingElements.forEach((el) => {
        el.classList.toggle("hide");
      });
    }, 300);
  } else {
    hidingElements.forEach((el) => {
      el.classList.toggle("hide");
    });
  }
  sidebar.classList.toggle("sidebar__small");
  mainArrow.classList.toggle("rotate");
};

const expandSubMenu = (event) => {
  const menuItemClicked = event.target;
  const menuItemClickedParent = menuItemClicked.parentNode;
  let richtigesElement;
  menuItemClickedParent.classList.contains("menu-item")
    ? (richtigesElement = menuItemClickedParent)
    : (richtigesElement = menuItemClicked);

  richtigesElement.classList.toggle("clicked");
  console.log("richtig", richtigesElement);
  console.log("richtigNext", richtigesElement.nextElementSibling);

  const subMenu = richtigesElement.nextElementSibling;

  //menuItemClickedParent.classList.contains("menu-item")
  //  ? menuItemClickedParent.classList.toggle("clicked")
  //  : menuItemClicked.classList.toggle("clicked");
  // const subMenu = document.querySelector(".clicked + .sub-menu");

  //const subMenu = menuItemClickedParent.nextSibling;
  console.log(
    menuItemClicked.parentNode.nextSibling,
    menuItemClickedParent.parentNode.nextSibling
  );
  subMenu.classList.toggle("sub-menu--show");
  //setTimeout(() => {
  //  subMenu.classList.toggle("opacity");
  //}, 200);
  const clickedArrow = document.querySelector(".clicked .arrow-small");
  clickedArrow.classList.toggle("rotate90");
  menuItemClickedParent.classList.remove("clicked");
  menuItemClicked.classList.remove("clicked");
};

navLabel.addEventListener("click", collapseSidebar);
cover.addEventListener("click", hideCover);

burger.addEventListener("click", showSidebar);

menuItems.forEach((el) => {
  el.addEventListener("click", expandSubMenu);
});
