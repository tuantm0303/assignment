import Header from "../components/header";
import Footer from "../components/footer";

const wardrobe = {
    render() {
        return /* html */ `
        ${Header.render()}
        <main>
            <div class="collection-filter py-7 border-2 border-solid border-gray-300 px-5">
                <div class="container--full flex justify-between">
                    <div class="container-wapper">
                        <h2 class="collection-filter text-2xl font-bold">Sản phẩm</h2>
                    </div>
                    <div class="container-select">
                        <select name="" id="" class="rounded-lg h-10 border-2 border-solid border-gray-300">
                            <option value="">Sắp xếp</option>
                            <option value="">Mới nhất</option>
                            <option value="">Bán chạy</option>
                            <option value="">Giá thấp đến cao</option>
                            <option value="">Giá cao đến thấp</option>
                            <option value="">% giảm giá nhiều</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="collections-discounts flex justify-between mt-5">
                <a href="#"><img class="img-discounts w-[80%] ml-[85px]"
                        src="https://mcdn.coolmate.me/uploads/January2022/HELLO_78.png" alt=""></a>
                <a href="#"><img class="img-discounts w-[80%] ml-[85px]" src="https://mcdn.coolmate.me/uploads/January2022/TIGER.png"
                        alt=""></a>
            </div>

            <div class="product-container pt-6 px-16">
                <h2 class="product-heading pl-2 text-2xl font-bold pb-6">Ready-To-Use Boxes</h2>
                <div class="view-product py-8 relative">
                    <div class="product-show grid grid-cols-5 gap-2">
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
                                        <img src="https://mcdn2-coolmate.cdn.vccloud.vn/uploads/December2021/ad_1_672x990.jpg"
                                            alt="" class="group-hover:hidden">
                                        <img src="https://mcdn2-coolmate.cdn.vccloud.vn/uploads/January2022/sthumnail_35_672x990.jpg" 
                                        alt="" class="hidden group-hover:block group-hover:opacity-70 z-10" >
                                    </a>
                                </div>
                                <div class="product-heading pl-2">
                                    <h3 class="product-title text-2xl font-semibold">Mặc là đẹp</h3>
                                    <div class="product-price">
                                        <div rel-script="product-price" data-price="599000" data-compare-price="768000"
                                            data-sale="1" class="product-prices flex">
                                            <ins class="text-red-500 text-sm pr-5">599.000đ</ins>
                                            <del>768.000đ</del>
                                            <span class="text-red-500 text-sm px-5">-23%</span>
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
                    </div>
                    <div class="view-more text-center bg-white h-16 w-full absolute">
                        <a href="#">View-more</a>
                    </div>
                </div>
            </div>
        </main>
        ${Footer.render()}
        `;
    },
};

export default wardrobe;