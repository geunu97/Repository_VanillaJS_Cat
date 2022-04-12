export default class Loading {
  LoadBlock = null;

  constructor($target) {
    const LoadBlock = document.createElement("div");
    LoadBlock.innerHTML = "<h2>로딩중...</h2>";
    LoadBlock.style.display = "none";

    this.$LoadBlock = LoadBlock;

    $target.appendChild(LoadBlock);
  }

  startLoading() {
    this.$LoadBlock.style.display = "block";
  }

  finishLoading() {
    this.$LoadBlock.style.display = "none";
  }
}
