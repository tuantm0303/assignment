import Header from "../components/header";
import Banner from "../components/banner";
import NewList from "../components/newList";
import Footer from "../components/footer";

const HomePage = {
    render() {
        return /* html */`
            ${Header.render()}
            ${Banner.render()}
            ${NewList.render()}
            ${Footer.render()}
            `;
    },
};

export default HomePage;