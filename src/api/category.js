import instance from "./instance";

const getAll = () => {
    const url = "/categorys";
    return instance.get(url);
};

const get = (id) => {
    const url = `/categorys/${id}`;
    return instance.get(url);
};

const add = (category) => {
    const url = `/categorys/`;
    return instance.post(url, category);
};

const remove = (id) => {
    const url = `/categorys/${id}`;
    return instance.delete(url);
};

const update = (category) => {
    const url = `/categorys/${category.id}`;
    return instance.put(url, category);
};

export {
    getAll, get, add, remove, update,
};