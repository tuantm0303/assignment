import Header from "../components/header";
import Footer from "../components/footer";

const NotFoundPage = {
    render() {
        return /* html */ `
        ${Header.render()}
        <div class="border-2 border-solid border-slate-500 text-center h-30 w-60 mx-auto my-20">
            <p><span class="font-bold">404:</span> NOT_FOUND_PAGE</p>
            <p>Code: <span class="font-bold">NOT_FOUND_PAGE</span></p>
        </div>
        ${Footer.render()}
        `;
    },
};

export default NotFoundPage;