import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboard";
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
    },
    "/newdetails/:id": ({ data }) => {
        const { id } = data;
        print(DetailPost, id);
    },
    "/outlet": () => {
        print(OutLet);
    },
    "/wardrobe": () => {
        print(wardrobe);
    },
    "/product": () => {
        print(Product);
    },
    "/introduce": () => {
        print(Introduce);
    },
    "/size": () => {
        print(Size);
    },
    "/cart": () => {
        print(CartPage);
    },
    "/signin": () => {
        print(SignInPage);
    },
    "/signup": () => {
        print(SignUpPage);
    },
    "/profile": () => {
        print(profilePage);
    },
    "/admin": () => {
        print(Dashboard);
    },
    "/admin/dashboard": () => {
        print(Dashboard);
    },
    "/admin/posts/index": () => {
        print(AdminPostPage);
    },
    "/admin/users/index": () => {
        print(UsersAdmin);
    },
    "/admin/order/index": () => {
        print(Order);
    },
    "/admin/category/index": () => {
        print(Category);
    },
    "/admin/posts/add": () => {
        print(Add);
    },
    "/admin/posts/edit/:id": ({ data }) => {
        const { id } = data;
        print(Edit, id);
    },
});

router.notFound(() => print(NotFoundPage));

router.resolve();