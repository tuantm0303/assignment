import Header from "../components/header";
import Footer from "../components/footer";
import { getCategory } from "../api/category";
import NewLists from "../components/newLists";

const Product = {
    async render(id) {
        const dataCate = (await getCategory(id)).data;
        return /* html */ `
        ${Header.render()}
        <!-- component -->
            <div class="flex mt-5">
                <div class='w-full max-w-lg px-10 py-8'>                    
                    <div class='border-2 border-gray-200'>
                        <div class="dropdown-menu shadow-2xl">
                            <div class="bg-white rounded-lg px-4 relative">
                                <svg class="absolute bottom-full right-4" width="30" height="20" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="15, 0 30, 20 0, 20" fill="#FFFFFF"/>
                                </svg>
                                ${dataCate.map((item) => /* html */`
                                <div class="py-6 flex items-center w-full hover:bg-gray-50 hover:border-b-2 hover:border-t-2">
                                    <a href="/#/category/${item.id}" class="flex-1">
                                        <div class="text-base">${item.name}</div>
                                    </a>
                                    <div>
                                        <svg width="40" height="20" viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="30" y1="2" x2="40" y2="10" stroke="#9CA3AF" />
                                            <line x1="30" y1="18" x2="40" y2="10" stroke="#9CA3AF" />
                                            <line x1="20" y1="10" x2="40" y2="10" stroke="#9CA3AF" />
                                        </svg>
                                    </div>
                                </div>
                                `).join("")}
                            </div>
                        </div>
                    </div>
                </div>
                ${await NewLists.render()}
            </div>

        ${Footer.render()}
        `;
    },
};

export default Product;