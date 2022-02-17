import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboard";
import AdminNewPage from "./pages/admin/new";
import Add from "./pages/admin/new/add";
import Edit from "./pages/admin/new/edit";
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

const router = new Navigo("/", { linksSelector: "a" });

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
                document.location.href = "/";
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
    "/signin": () => {
        print(SignInPage);
    },
    "/signup": () => {
        print(SignUpPage);
    },
    "/admin": () => {
        print(Dashboard);
    },
    "/admin/dashboard": () => {
        print(Dashboard);
    },
    "/admin/news/index": () => {
        print(AdminNewPage);
    },
    "/admin/news/add": () => {
        print(Add);
    },
    "admin/news/edit/:id": ({ data }) => {
        const { id } = data;
        print(Edit, id);
    },
});

router.notFound(() => print(NotFoundPage));

router.resolve();