const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  fetchCats: async (keyword) => {
    const res = await fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
    if (res.status === 200) return res.json();
    else alert("에러가 발생했습니다. 다시 입력해 주세요");
  },

  fetchCatDetails: async (id) => {
    const res = await fetch(`${API_ENDPOINT}/api/cats/${id}`);
    if (res.status === 200) return res.json();
    else alert("에러가 발생했습니다. 다시 클릭해 주세요");
  },

  fetchCatRandom: async () => {
    const res = await fetch(`${API_ENDPOINT}/api/cats/random50`);
    if (res.status === 200) return res.json();
    else alert("에러가 발생했습니다. 다시 클릭해 주세요");
  },
};

export default api;
