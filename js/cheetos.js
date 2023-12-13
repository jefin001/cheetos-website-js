// brand slider *************************************************

let productNames = [
  "POPCORN",
  "PRETZELS",
  "MAC 'N CHEESE",
  "FLAMIN HOT",
  "FANTASTIX",
  "SIMPLY",
  "BAKED",
];
let x = 0;
// // Create the buttons
// var left_Button = document.getElementById("left_button");
const right = function () {
  let container = document.getElementsByClassName("slider_img")[0];
  let containscoll = container.scrollLeft;
  if (containscoll >= 1226) {
    container.scrollLeft -= containscoll;
  } else {
    container.scrollLeft += 245;
  }
  console.log(container.scrollLeft);
  x += 1;
  if (x >= 7) {
    x = 0;
  }
  document.querySelector("h4").innerText = productNames[x];
  console.log(productNames[x]);

  // // let firstvalue = productNames[(productNames += 1)];

  // // console.log(firstvalue);

  // console.log(x);
};
// var right_Button = document.getElementById("right_button");
const left = function () {
  let container = document.getElementsByClassName("slider_img")[0];
  container.scrollLeft -= 245;
  x -= 1;
  if (x <= 0) {
    x = 0;
  }
  document.querySelector("h4").innerText = productNames[x];
  console.log(productNames[x]);
  // document.querySelector("h4").innerText = productNames[x];
  // x -= 1;
  // console.log(document.querySelector("h4").innerText);
  // console.log(productNames[x]);
};

// recipes slider ******************************************

let recipenames = [
  "CHEETOS® FLAMIN' HOT® Chocolate Gingerbread Cookies",
  "Cheesy CHEETOS® Turkey Parm",
  "Mountain Dew® Mule",
];
let z = 0;
var isScrolling = false;
let container = document.getElementsByClassName("img-slider")[0];

function scrollContainer(amount) {
  if (!isScrolling) {
    isScrolling = true;
    container.scrollLeft += amount;
    setTimeout(function () {
      isScrolling = false;
    }, 400);
  }
}
const slide_right = function () {
  let containscoll = container.scrollLeft;
  console.log(containscoll);
  if (containscoll >= 400) {
    scrollContainer(-containscoll);
  } else {
    scrollContainer(358);
  }
  z += 1;
  if (z >= 3) {
    z = 0;
  }
  document.querySelectorAll("h4")[1].innerText = recipenames[z];
};
const slide_left = function () {
  z -= 1;
  if (z <= 0) {
    z = 0;
  }
  document.querySelectorAll("h4")[1].innerText = recipenames[z];
  scrollContainer(-358);
  // let container = document.getElementsByClassName("img-slider")[0];
  // container.scrollLeft -= 250;
  console.log("hi");
};

// popup section ************************************

var modal = document.getElementsByClassName("mainpop");
var btn = document.getElementsByClassName("box");
var span = document.getElementsByClassName("close");
console.log(span);

// btn[0].onclick = function () {
//   console.log("sdfsd");
// };

let scrollverticaly = 0;
let scrollhorizontal = 0;
const disablescroll = function () {
  scrollverticaly = document.documentElement.scrollTop;
  scrollhorizontal = document.documentElement.scrollLeft;
  window.onscroll = function () {
    window.scrollTo(scrollhorizontal, scrollverticaly);
  };
};
const enablescroll = function () {
  scrollverticaly = document.documentElement.scrollTop;
  scrollhorizontal = document.documentElement.scrollLeft;
  window.onscroll = function () {};
};

for (i = 0; i < span.length; i++) {
  span[i].addEventListener("click", () => {
    modal[0].style.display = "none";
    enablescroll();
  });
}
function boxmodalclick(boxclikkk) {
  // alert("pop" + boxclikkk.id + "clicked!!");
  // console.log("this");
  modal[0].style.display = "flex";
  disablescroll();
}

poppage = document.getElementById("poppage");

document.getElementById("leftbtn").onclick = function () {
  poppage.scrollLeft += 769;
};
document.getElementById("rightbtn").onclick = function () {
  poppage.scrollLeft -= 769;
};

// drop down section***********

document.addEventListener("DOMContentLoaded", function () {
  var productsLink = document.querySelector(".prdthover");
  var productDropdown = document.getElementById("dropdown");

  productsLink.addEventListener("mouseover", function () {
    productDropdown.classList.add("active");
  });

  productsLink.addEventListener("mouseout", function () {
    productDropdown.classList.remove("active");
  });

  productDropdown.addEventListener("mouseout", function () {
    productDropdown.classList.remove("active");
  });
});

// search button click *******************

let searchA = document.querySelectorAll(
  "#navbar .wrapper .items .right ul li button"
);
let searchdiv = document.getElementsByClassName("gsearch");
let searchinput = document.getElementById("search");
console.log(searchdiv);
searchA[0].addEventListener("click", function (event) {
  event.preventDefault();
  searchA[0].style.display = "none";
  searchdiv[0].style.position = "relative";
  searchdiv[0].style.right = "3%";
  searchdiv[0].style.opacity = "1";
  searchinput.style.transition = "all 0.5s";
  searchinput.style.width = "75px";
  searchdiv[0].style.border = "2px solid black";
  searchdiv[0].style.padding = "3px";
  document.getElementById("search").focus();
});
const inp = function () {
  searchdiv[0].style.border = "1px solid #e57600";
};
const reverseinp = function () {
  searchdiv[0].style.border = "1px solid black";
  searchdiv[0].style.borderRadius = "3px";
};

// navbar sticky ***************************

const lines = document.querySelectorAll(".bar p");
const spotlight = document.getElementById("spotlight");
function handleScroll() {
  var scrollposition = window.scrollY;
  if (scrollposition >= spotlight.offsetTop + 200) {
    document.querySelector("#navbar .items .left").style.display = "none";
    document.querySelector("#navbar .wrapper .items .right").style.display =
      "none";
    document.getElementById("navbar").style.height = "0px";
    document.getElementById("navbar").style.padding = "0px";
    document.querySelector(".bar").style.cursor = "pointer";
    for (i = 0; i < lines.length; i++) {
      lines[i].style.opacity = "1";
    }
  } else {
    document.querySelector("#navbar .items .left").style.display = "block";
    document.querySelector("#navbar .wrapper .items .right").style.display =
      "block";
    document.getElementById("navbar").style.height = "9vh";
    document.getElementById("navbar").style.padding = "30px 74px";
    document.querySelector(".bar").style.cursor = "pointer";
  }
}
window.addEventListener("scroll", handleScroll);
function removescrollevent() {
  window.removeEventListener("scroll", handleScroll);
}
const bar = document.querySelector(".bar");
bar.addEventListener("mouseover", () => {
  lines[0].style.transform = "translateX(-7px)";
  lines[2].style.transform = "translateX(-3px)";
});
bar.addEventListener("mouseleave", () => {
  lines[0].style.transform = "translateX(0px)";
  lines[2].style.transform = "translateX(0px)";
});
bar.addEventListener("click", () => {
  document.querySelector("#navbar .items .left").style.display = "block";
  document.querySelector("#navbar .wrapper .items .right").style.display =
    "block";
  document.getElementById("navbar").style.height = "9vh";
  document.getElementById("navbar").style.padding = "30px 74px";
  for (i = 0; i < lines.length; i++) {
    lines[i].style.opacity = "0";
  }
  removescrollevent();
});
