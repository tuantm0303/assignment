import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a" });

const render = (content) => {
    document.getElementById("content").innerHTML = content.print();
};

router.on({ // on tu Navigo
    "/": () => {
        console.log("homePage");
    },
    "/about": () => {
        console.log("aboutPage");
    },
});

router.resolve();