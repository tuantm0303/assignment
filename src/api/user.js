import instance from "./instance";

export const signup = (user) => {
    const url = "/signup";
    return instance.post(url, user);
};

export const signin = (user) => {
    const url = "/signin";
    return instance.post(url, user);
};

export const getAll = () => {
    const url = "/users";
    return instance.get(url);
};

export const get = (id) => {
    const url = `/users/${id}`;
    return instance.get(url);
};

export const remove = (id) => {
    const url = `/users/${id}`;
    return instance.delete(url);
};

export const update = (user) => {
    const url = `/users/${user.id}`;
    return instance.put(url, user);
};

export const patch = (user) => {
    const url = `/users/${user.id}`;
    return instance.patch(url, user);
};