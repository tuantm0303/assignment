import Navigo from "navigo";
import AdminPostPage from "./pages/admin/posts";
import Add from "./pages/admin/posts/add";
import Edit from "./pages/admin/posts/edit";
import HomePage from "./pages/homepage";
import Introduce from "./pages/introduce";
import DetailPost from "./pages/detailPost";
import NotFoundPage from "./pages/notFoundPage";
import OutLet from "./pages/outlet";
import Product from "./pages/product";
import SignInPage from "./pages/sign_in";
import SignUpPage from "./pages/sign_up";
import Size from "./pages/size";
import wardrobe from "./pages/wardrobe";
import CartPage from "./pages/cartPage";
import UsersAdmin from "./pages/admin/users";
import profilePage from "./pages/profilePage";
import Order from "./pages/admin/order";
import Category from "./pages/admin/category";
import AddCategory from "./pages/admin/category/add";
import EditCategory from "./pages/admin/category/edit";
import searchPage from "./pages/search";
import Header from "./components/header";
import EditUser from "./pages/admin/users/edit";
import categoryPage from "./pages/categoryPage";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const $ = document.getElementById.bind(document);

const print = async (main, id) => {
    $("main").innerHTML = await main.render(id);
    if (main.afterRender) main.afterRender(id);
};

// private admin
router.on("admin/*/", () => {
}, {
    before(done, match) {
        if (localStorage.getItem("user")) {
            const checkAdmin = JSON.parse(localStorage.getItem("user")).email;
            if (checkAdmin === "tuan@gmail.com") {
                done();
            } else {
                document.location.href = "/#/";
            }
        } else {
            match();
        }
    },
});

router.on({ // on tu Navigo
    "/": () => {
        print(HomePage);
        print(Header);
        document.title = "Trang chủ";
    },
    "/newdetails/:id": ({ data }) => {
        const { id } = data;
        print(DetailPost, id);
        document.title = "Chi tiết sản phẩm";
    },
    "/category/:id": ({ data }) => {
        const { id } = data;
        print(categoryPage, id);
        document.title = `Danh mục sản phẩm`;
    },
    "/outlet": () => {
        print(OutLet);
        document.title = "Outlet";
    },
    "/wardrobe": () => {
        print(wardrobe);
        document.title = "Tủ đồ";
    },
    "/product": () => {
        print(Product);
        document.title = "Sản phẩm";
    },
    "/introduce": () => {
        print(Introduce);
        document.title = "Về Coolmate";
    },
    "/size": () => {
        print(Size);
        document.title = "Chọn Size";
    },
    "/cart": () => {
        print(CartPage);
        document.title = "Giỏ hàng";
    },
    "/signin": () => {
        print(SignInPage);
        document.title = "Đăng nhập";
    },
    "/signup": () => {
        print(SignUpPage);
        document.title = "Đăng ký";
    },
    "/search/:key": ({ data }) => {
        const { key } = data;
        print(searchPage, key);
        document.title = `Tìm kiếm sản phẩm ${key}`;
    },
    "/profile": () => {
        print(profilePage);
        document.title = "Thông tin khách hàng";
    },
    "/admin/posts/index": () => {
        print(AdminPostPage);
        document.title = "Quản lý sản phẩm";
    },
    "/admin/users/index": () => {
        print(UsersAdmin);
        document.title = "Quản lý người dùng";
    },
    "/admin/order/index": () => {
        print(Order);
        document.title = "Quản lý đơn hàng";
    },
    "/admin/category/index": () => {
        print(Category);
        document.title = "Quản lý danh mục";
    },
    "/admin/posts/add": () => {
        print(Add);
        document.title = "Thêm sản phẩm";
    },
    "/admin/category/add": () => {
        print(AddCategory);
        document.title = "Thêm danh mục";
    },
    "/admin/posts/edit/:id": ({ data }) => {
        const { id } = data;
        print(Edit, id);
        document.title = "Sửa sản phẩm";
    },
    "/admin/category/edit/:id": ({ data }) => {
        const { id } = data;
        print(EditCategory, id);
        document.title = "Sửa danh mục";
    },
    "/admin/user/edit/:id": ({ data }) => {
        const { id } = data;
        print(EditUser, id);
        document.title = "Phân quyền người dùng";
    },
});

router.notFound(() => print(NotFoundPage));

router.resolve();