import { get } from "../api/post";
import Footer from "../components/footer";
import Header from "../components/header";

const NewDetails = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
        ${Header.render()}
            <div class="max-w-5xl mx-auto grid grid-cols-2 gap-10 my-10"> 
                <div class="img-product">
                    <img src=${data.img} alt=${data.img}/>
                </div>
                <div class="desc-product">
                    <h1 class="my-3 font-semibold text-lg text-orange-500">${data.title}</h1>
                    <p>${data.desc}</p>
                </div>
            </div>
        ${Footer.render()}`;
    },
};

export default NewDetails;