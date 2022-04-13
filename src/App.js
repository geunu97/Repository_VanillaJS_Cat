import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import ImageInfo from "./components/ImageInfo.js";
import ChangeMode from "./components/ChangeMode.js";
import Loading from "./components/Loading.js";
import api from "./api/api.js";

console.log("app is running!");

export default class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.changeMode = new ChangeMode($target);

    this.loading = new Loading($target);

    this.searchInput = new SearchInput({
      $target,
      onSearch: async (keyword) => {
        let response = null;
        this.loading.startLoading();
        response = await api.fetchCats(keyword);
        if (response != null) {
          this.loading.finishLoading();
          this.setState(response.data);
        }
      },
      onRandom: async () => {
        let response = null;
        this.loading.startLoading();
        response = await api.fetchCatRandom();
        if (response != null) {
          this.loading.finishLoading();
          this.setState(response.data);
        }
      },
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: async (image) => {
        let response = null;
        this.loading.startLoading();
        response = await api.fetchCatDetails(image.id);
        if (response != null) {
          this.loading.finishLoading();
          this.imageInfo.setState({
            visible: true,
            image: response.data,
          });
        }
      },
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
      },
    });
  }

  setState(nextData) {
    localStorage.setItem("data", JSON.stringify(nextData));

    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
