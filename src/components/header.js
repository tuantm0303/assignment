const Header = {
    render() {
        return /* html */`
        <header>
            <div
                class="h-50 px-64 flex w-full justify-between bg-white items-center transition-all border-solid border-b border-current">
                <div class="header-logo h-25 w-20">
                    <a href="/#/"><img class="" src="https://www.coolmate.me/images/logo-coolmate.svg"
                            alt="Logo Coolmate"></a>
                </div>
                <div class="nav">
                    <ul class="flex p-5 text-center">
                        <li class="pr-10 hover:opacity-70 hover:text-red-500 font-semibold"><a href="/#/outlet">Outlet</a></li>
                        <li class="pr-10 hover:opacity-70 hover:text-red-500 font-semibold"><a href="/#/wardrobe">Tủ đồ</a></li>
                        <li class="pr-10 hover:opacity-70 hover:text-red-500 font-semibold"><a href="/#/product">Sản Phẩm</a></li>
                        <li class="pr-10 hover:opacity-70 hover:text-red-500 font-semibold"><a href="/#/introduce">Về Coolmate</a></li>
                        <li class="pr-10 hover:opacity-70 hover:text-red-500 font-semibold"><a href="/#/size">Chọn Size</a></li>
                    </ul>
                </div>
                <div class="header-action flex">
                    <form action="#" method="" class="search flex border relative">
                        <input type="text" name="keyword" placeholder="Tìm kiếm sản phẩm..." class="search-input mr-2 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="search-icon pt-1 h-6 w-6 mr-3 hover:opacity-70 hover:text-red-500" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </form>
                    <a href="/#/profile">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-5 hover:opacity-70 hover:text-red-500" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </a>
                    <a href="/#/cart">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:opacity-70 hover:text-red-500" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </a>
                </div>
            </div>
        </header>`;
    },
};

export default Header;