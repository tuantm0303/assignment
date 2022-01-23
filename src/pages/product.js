import Header from "../components/header";
import Footer from "../components/footer";

const Product = {
    render() {
        return /* html */ `
        ${Header.render()}
        <h1>Product</h1>
        ${Footer.render()}
        `;
    },
};

export default Product;