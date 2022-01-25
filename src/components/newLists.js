import { getAll } from "../api/post";

const NewLists = {
    async render() {
        // sử dụng destructuring
        const { data } = await getAll();
        return /* html */`
        <section class="product my-5 mx-20">
            <h2 class="font-semibold text-2xl text-red-800">Cần phải có</h2>
            <div class="wapper grid gap-4 grid-cols-4 mt-5 mx-10">
            ${data.map((item) => /* html */ `
                <div class="everyday pb-5">
                    <a href="/newdetails/${item.id}">
                        <img src=${item.img} alt=${item.img}>
                        <!-- <img src="https://mcdn2-coolmate.cdn.vccloud.vn/uploads/November2021/BT5A8075_6_672x990.jpg" alt=""> -->
                        <h2 class="title text-center py-2">${item.title}</h2>
                        <p class="desc text-center">${item.desc}</p>
                    </a>
                </div> `).join("")}
            </div>
        </section>`;
    },
};

export default NewLists;