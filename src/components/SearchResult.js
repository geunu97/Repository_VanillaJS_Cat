export default class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("section");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;

    this.render();

    const $LastResultData = JSON.parse(localStorage.getItem("data"));
    if ($LastResultData) this.setState($LastResultData);

    this.$searchResult.addEventListener("click", (e) => {
      this.onClick(e.target.id);
    });
  }

  setState(nextData) {
    if (nextData.length === 0) {
      this.$searchResult.innerHTML = "<h2>검색 결과가 없습니다</h2>";
    } else {
      this.data = nextData;
      this.render();
    }
  }

  render() {
    this.$searchResult.innerHTML = this.data
      .map(
        (cat) => `
          <div class="item" title=${cat.name}>
            <img src=${cat.url} alt=${cat.name} id=${cat.id} />
          </div>
        `
      )
      .join("");
  }
}
