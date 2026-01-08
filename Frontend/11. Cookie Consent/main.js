const cookieBanner = document.getElementById("cookie-banner");
const acceptBtn = document.querySelector(".acceptBtn");
const rejectBtn = document.querySelector(".rejectBtn");

acceptBtn.onclick = () => {
  {
    document.cookie = "CookieBy=Ryan; max-age=0; path=/";
    location.reload();
  }
  if (document.cookie) {
    cookieBanner.classList.add("hide");
  } else {
    alert(
      "Cookie can't be set! Please" +
        " unblock this site from the cookie" +
        " setting of your browser."
    );
  }
};

rejectBtn.onclick = () => {
  alert("Cookies rejected. Some functionality may be limited.");
  cookieBanner.classList.add("hide");
};

let checkCookie = document.cookie.indexOf("CookieBy=Ryan");
checkCookie !== -1
  ? cookieBanner.classList.add("hide")
  : cookieBanner.classList.remove("hide");
