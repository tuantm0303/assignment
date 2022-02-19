/* eslint-disable no-return-assign */
// import { getAll, remove } from "../../../api/user";
import HeaderAdmin from "../../../components/header_admin";
import NavAdmin from "../../../components/nav_admin";

const Order = {
    async render() {
        // const { data } = await getAll();
        let cart = [];

        // them vao localStorage
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return /* html */`
            <div class="min-h-full">
                ${HeaderAdmin.render()}
                ${NavAdmin.render()}
                <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <!-- This example requires Tailwind CSS v2.0+ -->
                    <div class="lg:flex lg:items-center lg:justify-between">
                    <div class="flex-1 min-w-0">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                        Quản lý đơn hàng
                        </h2>
                    </div>
                </div>
                </header>
        
                <main>
                    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <!-- Replace with your content -->
                        <div class="px-4 py-6 sm:px-0">
                            <div class="border-4 border-dashed border-gray-200 rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th scope="col" class="text-center px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                ID
                                            </th>
                                            <th scope="col" class="text-center px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Product
                                            </th>
                                            <th scope="col" class="text-center px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Price New
                                            </th>
                                            <th scope="col" class="text-center px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Price Old
                                            </th>
                                            <th scope="col" class="text-center px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Quaytity
                                            </th>
                                            <th scope="col" class="text-center px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                    ${cart.map((item) => /* html */`
                                        <tr>
                                            <td class="px-6 py-4 whitespace-nowrap text-center">
                                                <div class="flex items-center">
                                                    <div class="flex-shrink-0 h-10 w-10">
                                                        ${item.id}
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-center">
                                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                ${item.title}
                                                </span>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-center">
                                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                ${item.priceNew}
                                                </span>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-center">
                                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                ${item.priceOld}
                                                </span>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-center">
                                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                ${item.quantity}
                                                </span>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                                <button data-id="${item.id}" class="btn btn-delete font-semibold border border-blue-600 rounded-xl bg-blue-600 text-white p-2 hover:text-black hover:bg-red-600 hover:border-red-600">Delete</button>
                                            </td>
                                        </tr>`).join("")}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- /End replace -->
                    </div>
                </main>
            </div>`;
    },

    // afterRender() {
    //     const btns = document.querySelectorAll(".btn");
    //     btns.forEach((btn) => {
    //         btn.addEventListener("click", () => {
    //             const { id } = btn.dataset; // dataset lấy từ data-id="${item.id}"
    //             // eslint-disable-next-line no-alert
    //             const confirm = window.confirm("Bạn có muốn xóa không???");

    //             if (confirm) {
    //                 remove(id)
    //                     .then(() => window.location.href = "/#/admin/users/index");
    //             }
    //         });
    //     });
    // },
};

export default Order;