import Navigo from "navigo";
import HomePage from "./pages/homepage";

const router = new Navigo("/", { linksSelector: "a" });

const $ = document.getElementById.bind(document);

const print = async (main) => {
    $("main").innerHTML = await main.render();
};

router.on({ // on tu Navigo
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        console.log("aboutPage");
    },
});

router.resolve();