import Footer from "../components/footer";
import Header from "../components/header";
import { decreaseQuantity, increaseQuantity, removePostInCart } from "./utils/cart";
import { reRender } from "./utils/reRender";

const CartPage = {
    render() {
        let cart = [];

        // them vao localStorage
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return /* html */ `
        ${Header.render()}
            <table>
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Giá sản phẩm</th>
                        <th>Số lượng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${cart.map((item) => /* html */ `
                        <tr>
                            <td>${item.title}</td>
                            <td>${item.priceNew}</td>
                            <td>
                                <input type="number" value="${item.quantity}" class="border border-gray-500 p-2"/>
                                <button data-id="${item.id}" class="btn btn-increase bg-green-500 p-2">Tăng</button>
                                <button data-id="${item.id}" class="btn btn-decrease bg-orange-500 p-2">Giảm</button>
                            </td>
                            <td>
                                <button data-id="${item.id}" data-id="${item.id}" class="btn btn-remove bg-red-500 p-2">Xóa</button>
                            </td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        ${Footer.render()}
        `;
    },

    afterRender() {
        const buttons = document.querySelectorAll(".btn");
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const { id } = button.dataset;
                if (button.classList.contains("btn-increase")) {
                    increaseQuantity(id, () => reRender(CartPage, "#main"));
                } else if (button.classList.contains("btn-decrease")) {
                    decreaseQuantity(id, () => reRender(CartPage, "#main"));
                } else {
                    removePostInCart(id, () => reRender(CartPage, "#main"));
                }
            });
        });
    },
};

export default CartPage;