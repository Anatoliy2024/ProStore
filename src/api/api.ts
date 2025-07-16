import axios from "axios"

export const productAPI = {
  getProductInfo(id: string) {
    return axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.data)
  },
  getProductsInfo(offset: number, limit = 10) {
    return axios
      .get(`https://api.escuelajs.co/api/v1/products`, {
        params: { offset: offset * 10 - 10, limit },
      })
      .then((res) => res.data)
  },
  getAllProducts() {
    return axios
      .get(`https://api.escuelajs.co/api/v1/products`)
      .then((res) => res.data)
  },
}
