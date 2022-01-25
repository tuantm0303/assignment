import instance from "./instance";

const getAll = () => {
    const url = "/product";
    return instance.get(url);
};

const get = (id) => {
    const url = `/product/${id}`;
    return instance.get(url);
};

const add = (post) => {
    const url = `/product/`;
    return instance.post(url, post);
};

const remove = (id) => {
    const url = `/product/${id}`;
    return instance.delete(url);
};

const update = (post) => {
    const url = `/product/${post.id}`;
    return instance.put(url, post);
};

export {
    getAll, get, add, remove, update,
};