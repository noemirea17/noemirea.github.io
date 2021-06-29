var hamburgerMenu = $("a.hamb_menu i.hamb_menu");

hamburgerMenu.click(function () {
  $(".hamburger-menu").show();
});

var closeMenu = $("a.close");

closeMenu.click(function () {
  $(".hamburger-menu").hide();
});
