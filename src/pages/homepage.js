import Header from "../components/header";
import Banner from "../components/banner";
import NewLists from "../components/newLists";
import Footer from "../components/footer";

const HomePage = {
    async render() {
        return /* html */`
            ${Header.render()}
            ${Banner.render()}
            ${await NewLists.render()}
            ${Footer.render()}
            `;
    },
};

export default HomePage;