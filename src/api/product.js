import instance from "./instance";

const getAll = () => {
    const url = "/product";
    return instance.get(url);
};

const get = (id) => {
    const url = `/product/${id}`;
    return instance.get(url);
};

const add = (product) => {
    const url = `/product/`;
    return instance.product(url, product);
};

const remove = (id) => {
    const url = `/product/${id}`;
    return instance.delete(url);
};

const update = (product) => {
    const url = `/product/${product.id}`;
    return instance.put(url, product);
};

export {
    getAll, get, add, remove, update,
};