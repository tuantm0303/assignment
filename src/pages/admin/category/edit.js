/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
import { get, update } from "../../../api/category";
import HeaderAdmin from "../../../components/header_admin";
import NavAdmin from "../../../components/nav_admin";
/* eslint-disable import/order */
// eslint-disable-next-line no-unused-vars
import validate from "jquery-validation";
// eslint-disable-next-line import/no-extraneous-dependencies
import $ from "jquery";

const EditCategory = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
        <style>
            label.error{
                color: red;
            }
        </style>
        ${HeaderAdmin.render()}
        ${NavAdmin.render()}
        <div class="min-h-full">
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                    <div class="flex-1 min-w-0">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Sửa danh mục</h2>
                    </div>
                    <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/#/admin/category/index" class="sm:ml-3">
                        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="-ml-1 mr-2 h-5 w-5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>
                            Quay lại
                        </button>
                        </a>
                    </div>
                    
                </div>
        
            </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <!-- Replace with your content -->
                    <div class="px-4 py-6 sm:px-0">
                        <div class="border-4 border-dashed border-gray-200 rounded-lg">                    
                            <div class="mt-5 md:mt-0 md:col-span-2">
                                <form action="#" id="form-add">
                                    <div class="shadow sm:rounded-md sm:overflow-hidden">
                                        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        <!-- Name -->
                                            <div>
                                                <div class="col-span-3 sm:col-span-2">
                                                    <label for="company-website" class="block text-sm font-medium text-gray-700">Category Name</label>
                                                    <div class="mt-1 flex rounded-md shadow-sm">
                                                        <input class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3" 
                                                        type="text" name="title" placeholder="Category Name" id="category-name" value="${data.name}">
                                                    </div>
                                                </div>
                                            </div>
                                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button type="submit"
                                                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- /End replace -->
                </div>
            </main>
        </div>`;
    },

    afterRender(id) {
        const formAdd = document.querySelector("#form-add");

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();

            const postFake = {
                id,
                name: document.querySelector("#category-name").value,
            };
            update(postFake)
                .then(() => {
                    window.location.href = "/#/admin/category/index";
                });
        });

        $().ready(() => {
            $("#signupform").validate({
                onfocusout: false,
                onkeyup: false,
                onclick: false,
                rules: {
                    title: {
                        required: true,
                        minlength: 10,
                    },
                },
                messages: {
                    name: {
                        required: "Bắt buộc nhập email",
                        minlength: "Hãy nhập ít nhất 5 ký tự",
                    },
                },
            });
        });
    },
};

export default EditCategory;