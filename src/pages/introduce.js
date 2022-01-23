import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";

const Introduce = {
    render() {
        return /* html */ `
        ${Header.render()}
        ${Banner.render()}
        <h1>Introduce</h1>
        ${Footer.render()}
        `;
    },
};

export default Introduce;