/* eslint-disable import/prefer-default-export */
let cart = [];

// them vao localStorage
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

export const addToCart = (newPost) => {
    const existPost = cart.find((item) => item.id === newPost.id);
    if (!existPost) {
        cart.push(newPost);
    } else {
        existPost.quantity += +newPost.quantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
};

// export increaseQuantity = () = {

// }