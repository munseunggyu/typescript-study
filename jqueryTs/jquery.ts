$("p").removeClass("myClass noClass").addClass("yourClass");
$(["p", "t"]).text("hello");
const tag = $("ul li")
  .addClass("hello")
  .addClass(function (idx) {
    return "item-" + idx;
  });
