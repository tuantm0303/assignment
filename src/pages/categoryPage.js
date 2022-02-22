import { getAll } from "../api/category";
import { getPost } from "../api/posts";
import Header from "../components/header";
import Footer from "../components/footer";

const categoryPage = {
    async render(id) {
        // sử dụng destructuring
        const { data } = await getPost(id);
        const dataCate = (await getAll()).data;
        return /* html */`
        ${Header.render()}

            <div class="flex mt-5">
                <div class='w-full max-w-lg px-10 py-8'>                    
                    <div class='border-2 border-gray-200'>
                        <div class="dropdown-menu shadow-2xl">
                            <div class="bg-white rounded-lg px-4 relative">
                                <svg class="absolute bottom-full right-4" width="30" height="20" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="15, 0 30, 20 0, 20" fill="#FFFFFF"/>
                                </svg>
                                ${dataCate.map((itemCate) => /* html */`
                                <div class="py-6 flex items-center w-full hover:bg-gray-50 hover:border-b-2 hover:border-t-2">
                                    <a href="/#/category/${itemCate.id}" class="flex-1">
                                        <div class="text-base">${itemCate.name}</div>
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
                
                <div class="product-show flex flex-wrap">
                ${data.map((item) => /* html */ `
                    <div class="group products p-1 pb-5 border-2 border-solid border-gray-400 m-3 w-[275px] rounded-lg shadow-2xl relative">
                        <div class="product-img relative">
                            <div class="product-reviews flex justify-between w-full absolute z-20">
                                <div class="star-quantily flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-1 w-2.5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-1 w-2.5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-1 w-2.5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-1 w-2.5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-1 w-2.5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <div class="quantily">
                                        <span class="text-red-500 text-sm">(5)</span>
                                    </div>
                                </div>
                                <button class="tags border-2 rounded-xl h-7 w-11 bg-red-500 text-white-500">New</button>
                            </div>
                            <div class="pro-img overflow-hidden">
                                <a href="/#/newdetails/${item.id}">
                                    <img src="${item.img[0]}"
                                        alt="${item.img[0]}" class="w-[385px] h-[261] group-hover:hidden">
                                    <img src="${item.img[1]}"
                                    alt="${item.img[1]}" class="w-[385px] h-[261] hidden group-hover:block group-hover:filter group-hover:scale-125 transition-all transform duration-500 object-cover z-10" >
                                </a>
                            </div>
                            <div
                                class="group-hover:translate-y-[-50px] w-[95%] product-btn relative translate-y-[60px] duration-100 mx-auto absolute">
                                <button
                                    class="btn border-2 overflow-hidden border-solid border-blue-500 rounded-xl bg-blue-500 w-full h-10">
                                    <a href="#">Mua ngay</a>
                                </button>
                            </div>
                            <div class="product-heading pl-2 relative bg-white">
                                <h3 class="product-title font-semibold">${item.title}</h3>
                                <div class="product-price">
                                    <div rel-script="product-price" class="product-prices flex">
                                        <ins class="text-red-500 text-sm pr-5">${item.priceNew.toLocaleString("vi", { style: "currency", currency: "VND" })} VND</ins>
                                        <del class="text-xs">${item.priceOld.toLocaleString("vi", { style: "currency", currency: "VND" })} VND</del>
                                        <span class="text-red-500 text-sm px-5">-${item.sale}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-white w-full"></div>
                    </div>
                `).join("")}
                </div>
            </div>
        ${Footer.render()}
        `;
    },
};

export default categoryPage;