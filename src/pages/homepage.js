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

    afterRender() {
        const searchBtn = document.querySelector(".search-input");
        const search = document.querySelector(".search");

        search.addEventListener("submit", (e) => {
            e.preventDefault();
            document.location.href = `/#/search/${searchBtn.value}`;
        });
    },
};

export default HomePage;