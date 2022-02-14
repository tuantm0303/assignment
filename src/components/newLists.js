import { getAll } from "../api/post";

const NewLists = {
    async render() {
        // sử dụng destructuring
        const { data } = await getAll();
        return /* html */`
        <div class="product-show grid grid-cols-5 gap-2">
        ${data.map((item) => /* html */ `
        <div class="group products p-1 border-2 border-solid border-black m-3">
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
                                <span class="text-red-500 text-sm">(1)</span>
                            </div>
                        </div>
                        <button class="tags border-2 rounded-xl h-7 w-11 bg-red-500 text-white-500">New</button>
                    </div>
                    <div class="pro-img">
                        <a href="#">
                            <img src="${item.img[0]}"
                                alt="${item.img[0]}" class="w-[385px] h-[261] group-hover:hidden">
                            <img src="${item.img[1]}"
                            alt="" class="hidden group-hover:block group-hover:opacity-70 z-10" >
                        </a>
                    </div>
                    <div class="product-heading pl-2">
                        <h3 class="product-title font-semibold">${item.title}</h3>
                        <div class="product-price">
                            <div rel-script="product-price" class="product-prices flex">
                                <ins class="text-red-500 text-sm pr-5">${item.priceNew} $</ins>
                                <del>${item.priceOld} $</del>
                                <span class="text-red-500 text-sm px-5">-${item.sale}%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="group-hover:translate-y-[-115px] w-[95%] product-btn relative translate-y-[60px] duration-100 mx-auto">
                    <button
                        class="btn border-2 overflow-hidden border-solid border-blue-500 rounded-xl bg-blue-500 w-full h-10">
                        <a href="#">Mua ngay</a>
                    </button>
                </div>
            </div>
        `)}
        </div>
        <div class="view-more text-center bg-white h-16 w-full absolute">
            <a href="#">View-more</a>
        </div>`;
    },
};

export default NewLists;