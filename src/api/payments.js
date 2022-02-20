/* eslint-disable import/prefer-default-export */
import instance from "./instance";

export const add = (post) => {
    const url = `/payments/`;
    return instance.post(url, post);
};