interface zQuery<T> {
  text(
    param?:
      | string
      | number
      | ((this: T, index: number) => string | number | boolean)
  ): this;
  html(param: string | Document | DocumentFragment): void;
}

const $tag: zQuery<HTMLElement> = $([
  "p",
  "t",
]) as unknown as zQuery<HTMLElement>;

$("p").removeClass("myClass noClass").addClass("yourClass");
$tag.text("hello");
$tag.text(123);
$tag.text(function (index) {
  console.log(this, index);
  return true;
});

$tag.text().html(document);
const tag = $("ul li")
  .addClass("hello")
  .addClass(function (idx) {
    return "item-" + idx;
  });
