const TEMPLATE = '<input type="text">';

export default class SearchInput {
  latestArr = [];

  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";
    this.$searchInput.autofocus = true;
    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    const $latest = document.createElement("div");
    $latest.className = "latestBlock";
    this.$latest = $latest;
    $target.appendChild($latest);

    this.onSearch = onSearch;

    $searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
        this.latestArr.push(e.target.value);
        if (this.latestArr.length > 5) {
          this.latestArr.shift();
        }
        this.render();
      }
    });

    $searchInput.addEventListener("click", (e) => {
      if (e.target.value.length > 0) this.$searchInput.value = "";
    });

    console.log("SearchInput created.", this);
  }

  render() {
    this.$latest.innerHTML = this.latestArr.map(
      (item) => `<span class='latest'>${item}</span>`
    );

    this.$latest.querySelectorAll(".latest").forEach((item, index) => {
      item.addEventListener("click", () => {
        this.onSearch(this.latestArr[index]);
        this.$searchInput.value = this.latestArr[index];
      });
    });
  }
}
