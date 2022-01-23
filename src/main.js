import Navigo from "navigo";
import HomePage from "./pages/homepage";
import Introduce from "./pages/introduce";
import NotFoundPage from "./pages/notFoundPage";
import OutLet from "./pages/outlet";
import Product from "./pages/product";
import Size from "./pages/size";
import wardrobe from "./pages/wardrobe";

const router = new Navigo("/", { linksSelector: "a" });

const $ = document.getElementById.bind(document);

const print = async (main) => {
    $("main").innerHTML = await main.render();
};

router.on({ // on tu Navigo
    "/": () => {
        print(HomePage);
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
});

router.notFound(() => print(NotFoundPage));

router.resolve();