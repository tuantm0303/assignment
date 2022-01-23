const Banner = {
    render() {
        return /* html */ `
        <section class="banner w-full ">
            <div class="banner-img">
                <img src="https://mcdn2-coolmate.cdn.vccloud.vn/uploads/January2022/HERO-BANNER-don-nam-ho_34.jpg"
                    alt="banner">
            </div>
            <div class="banner-policy text-center justify-center flex">
                <a href="#"
                    class="banner-policy-item relative bottom-24 mx-5 rounded-3xl flex-1 leading-5 overflow-hidden px-4 py-1 border-black border-2 border-solid hover:border-gray-400 hover:text-gray-400">
                    Miễn phí vận chuyển
                </a>
                <a href="#"
                    class="banner-policy-item relative bottom-24 mx-5 rounded-3xl flex-1 leading-5 overflow-hidden px-4 py-1 border-black border-2 border-solid hover:border-gray-400 hover:text-gray-400">
                    60 ngày đổi trả
                </a>
                <a href="#"
                    class="banner-policy-item relative bottom-24 mx-5 rounded-3xl flex-1 leading-5 overflow-hidden px-4 py-1 border-black border-2 border-solid hover:border-gray-400 hover:text-gray-400">
                    Giao hàng tận nhà relative
                </a>
            </div>
        </section>`;
    },
};

export default Banner;