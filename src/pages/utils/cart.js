/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
import toastr from "toastr";
import "toastr/build/toastr.min.css";

let cart = [];

// them vao localStorage
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

export const addToCart = (newPost, next) => {
    const existPost = cart.find((item) => item.id === newPost.id);
    if (!existPost) {
        cart.push(newPost);
    } else {
        existPost.quantity += +newPost.quantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};

export const increaseQuantity = (id, next) => {
    cart.find((item) => item.id === +id).quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    toastr.success("thêm hàng thành công!");
    next();
};

export const decreaseQuantity = (id, next) => {
    const decreaseQuantity = cart.find((item) => item.id === +id);
    decreaseQuantity.quantity--;
    toastr.success("bớt hàng thành công!");
    if (decreaseQuantity.quantity < 1) {
        const confirm = window.confirm("Bạn muốn xóa sản phẩm này không");
        if (confirm) {
            toastr.success("Bạn đã xóa sản phẩm khỏi giỏ hàng");
            cart = cart.filter((item) => item.id !== +id);
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};

export const removePostInCart = (id, next) => {
    const confirm = window.confirm("Bạn muốn xóa sản phẩm này không");
    if (confirm) {
        cart = cart.filter((item) => item.id !== +id);
        localStorage.setItem("cart", JSON.stringify(cart));
        toastr.success("Bạn đã xóa sản phẩm khỏi giỏ hàng");
    }
    next();
};