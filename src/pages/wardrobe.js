import Header from "../components/header";
import Footer from "../components/footer";

const wardrobe = {
    render() {
        return /* html */ `
        ${Header.render()}
        <h1>Tủ đồ</h1>
        ${Footer.render()}
        `;
    },
};

export default wardrobe;