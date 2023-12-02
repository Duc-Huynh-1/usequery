import instance from "./instance";

const getCart = () => {
    return instance.get('/cart');
}

const addCart = (datas:any) => {
    return instance.post('/cart', datas);
}

export { getCart, addCart };
