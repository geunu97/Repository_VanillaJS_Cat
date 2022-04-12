const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  fetchCats: (keyword) => {
    return fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`).then((res) => {
      if (res.status === 200) return res.json();
      else console.log("에러가 발생했습니다");
    });
  },

  fetchCatDetails: (id) => {
    return fetch(`${API_ENDPOINT}/api/cats/${id}`).then((res) => {
      if (res.status === 200) return res.json();
      else console.log("에러가 발생했습니다");
    });
  },
};

export default api;
