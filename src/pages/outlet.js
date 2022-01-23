import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";

const OutLet = {
    render() {
        return /* html */ `
        ${Header.render()}
        ${Banner.render()}
        <h1>OUTLET</h1>
        ${Footer.render()}
        `;
    },
};

export default OutLet;