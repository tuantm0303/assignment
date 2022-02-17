import Footer from "../components/footer";
import Header from "../components/header";

const CartPage = {
    render() {
        let cart = [];

        // them vao localStorage
        if (localStorage.getItem("cart")) {
            console.log(cart)
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
};

export default CartPage;