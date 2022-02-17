import { get } from "../api/posts";
import Footer from "../components/footer";
import Header from "../components/header";
import { addToCart } from "./utils/cart";

const DetailPost = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
        ${Header.render()}
            <div class="max-w-5xl mx-auto grid grid-cols-2 gap-10 my-10"> 
                <div class="img-product">
                    <img src=${data.img[0]} alt=${data.img[0]}/>                    
                </div>
                <div class="desc-product">
                    <h1 class="my-3 font-semibold text-lg text-orange-500">${data.title}</h1>
                    <p>${data.desc}</p>
                    <div rel-script="product-price" class="product-prices flex my-5">
                        <ins class="text-red-500 text-4xl pr-5">${data.priceNew.toLocaleString("vi", { style: "currency", currency: "VND" })} VND</ins>
                        <del>${data.priceOld.toLocaleString("vi", { style: "currency", currency: "VND" })} VND</del>
                        <span class="text-red-500 text-sm px-5">-${data.sale}%</span>
                    </div>
                    <div class="addtocart flex">
                        <input type="number" value="1" id="inputValue" class="m-2 p-2 input-quantity border-2 border-solid rounded-xl items-center h-10 w-14 leading-4" >
                        <button id="btn-add-to-cart"
                            class="btn m-2 border-2 border-solid border-red-400 rounded-xl bg-red-400 w-full text-white h-10 hover:opacity-90">
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
        ${Footer.render()}`;
    },

    afterRender(id) {
        const addtocart = document.querySelector("#btn-add-to-cart");
        addtocart.addEventListener("click", async () => {
            const data = await get(id);
            addToCart({ ...data, quantity: 1 });
        });
    },
};

export default DetailPost;