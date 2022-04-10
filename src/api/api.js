const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  fetchCats: (keyword) => {
    return fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`).then((res) =>
      res.json()
    );
  },
  fetchCatDetails: (id) => {
    return fetch(`${API_ENDPOINT}/api/cats/${id}`).then((res) => res.json());
  },
};

export default api;
