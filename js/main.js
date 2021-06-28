var hamburgerMenu = $("a i");

hamburgerMenu.click(function () {
  $(".hamburger-menu").show();
});

var closeMenu = $("a.close");

closeMenu.click(function () {
  $(".hamburger-menu").hide();
});
