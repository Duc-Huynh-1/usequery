import instance from "./instance";

const getCart = () => {
    return instance.get('/cart');
}

const putCart = (id:number, datas: "") => {
    return instance.put(`/cart/${id}`, datas);
}

const addCart = (datas: "") => {
    return instance.post(`/cart`, datas);
}
// const removeCartA = (id:any) => {
//     return instance.delete(`/cart/${id}`);
// }


export { getCart, addCart, putCart };
