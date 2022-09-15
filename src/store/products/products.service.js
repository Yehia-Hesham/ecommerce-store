import apiClient from "../../utils/apiClient";

const RESOURCE = {
    PRODUCTS: 'products',
    USERS: 'users',
}


const readProducts = () => {
    return apiClient.get(`${RESOURCE.PRODUCTS}`)

}

export default {readProducts}