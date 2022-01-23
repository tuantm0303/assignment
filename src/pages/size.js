import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";

const Size = {
    render() {
        return /* html */ `
        ${Header.render()}
        ${Banner.render()}
        <h1>Size</h1>
        ${Footer.render()}
        `;
    },
};

export default Size;