import instance from "./instance";

const getAll = () => {
    const url = "/posts";
    return instance.get(url);
};

const get = (id) => {
    const url = `/posts/${id}`;
    return instance.get(url);
};

const add = (post) => {
    const url = `/posts/`;
    return instance.post(url, post);
};

const remove = (id) => {
    const url = `/posts/${id}`;
    return instance.delete(url);
};

const update = (post) => {
    const url = `/posts/${post.id}`;
    return instance.put(url, post);
};

export {
    getAll, get, add, remove, update,
};