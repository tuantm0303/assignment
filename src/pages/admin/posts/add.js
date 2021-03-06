/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
import axios from "axios";
import { add } from "../../../api/posts";
import HeaderAdmin from "../../../components/header_admin";
import NavAdmin from "../../../components/nav_admin";
/* eslint-disable import/order */
// eslint-disable-next-line no-unused-vars
import validate from "jquery-validation";
// eslint-disable-next-line import/no-extraneous-dependencies
import $ from "jquery";

const Add = {
    render() {
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
                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Thêm mới bài viết</h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <a href="/#/admin/posts/index" class="sm:ml-3">
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
                                    <!-- title -->
                                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        <div>
                                            <div class="col-span-3 sm:col-span-2">
                                                <label for="company-website" class="block text-sm font-medium text-gray-700">Title</label>
                                                <div class="mt-1 flex rounded-md shadow-sm">
                                                    <input class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3" 
                                                    type="text" name="title" placeholder="Title" id="title-post">
                                                </div>
                                            </div>
                                        </div>
                                    <!-- price new -->
                                    <div>
                                        <div class="col-span-3 sm:col-span-2">
                                            <label for="company-website" class="block text-sm font-medium text-gray-700">Price New</label>
                                            <div class="mt-1 flex rounded-md shadow-sm">
                                                <input class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3" 
                                                type="number" name="price-new-post" placeholder="Price New" id="price-new-post">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- price old -->
                                    <div>
                                        <div class="col-span-3 sm:col-span-2">
                                            <label for="company-website" class="block text-sm font-medium text-gray-700">Price Old</label>
                                            <div class="mt-1 flex rounded-md shadow-sm">
                                                <input class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3" 
                                                type="number" name="price-old-post" placeholder="Price Old" id="price-old-post">
                                            </div>
                                        </div>
                                    </div>

                                    <!-- sale -->
                                    <div>
                                        <div class="col-span-3 sm:col-span-2">
                                            <label for="company-website" class="block text-sm font-medium text-gray-700">Sale</label>
                                            <div class="mt-1 flex rounded-md shadow-sm">
                                                <input class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3" 
                                                type="number" name="sale" placeholder="Sale" id="sale">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- cate -->
                                    <div>
                                        <div class="col-span-3 sm:col-span-2">
                                            <label for="company-website" class="block text-sm font-medium text-gray-700">Category</label>
                                            <div class="mt-1 flex rounded-md shadow-sm">
                                                <input class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3" 
                                                type="number" name="cate" placeholder="Category" id="categoryId">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Description -->
                                        <div>
                                            <label for="about" class="block text-sm font-medium text-gray-700">Description</label>
                                            <div class="mt-1">
                                                <textarea id="desc-post" name="about" rows="10" placeholder="Description"
                                                    class="shadow-sm mt-1 block w-full  border border-gray-300 rounded-md p-3">
                                                </textarea>
                                            </div>
                                        </div>
                                        <!-- preview img -->
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700">Priview Image</label>
                                            <img class="my-5" src="" alt="">
                                            <div
                                                class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                <img src="http://2.bp.blogspot.com/-MowVHfLkoZU/VhgIRyPbIoI/AAAAAAAATtI/fHk-j_MYUBs/s640/placeholder-image.jpg" id="imgPreview" />
                                                <img src="http://2.bp.blogspot.com/-MowVHfLkoZU/VhgIRyPbIoI/AAAAAAAATtI/fHk-j_MYUBs/s640/placeholder-image.jpg" id="imgPreview2" />
                                            </div>
                                        </div>
                                    <!-- Images -->
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700">Image</label>
                                            <img class="my-5" src="" alt="">
                                            <div
                                                class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                <div class="space-y-1 text-center">
                                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                                                        viewBox="0 0 48 48" aria-hidden="true">
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <div class="flex text-sm text-gray-600">
                                                        <label for="file-upload"
                                                            class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                            <span>Upload new file</span>
                                                            <input class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3" 
                                                            type="file" name="title" placeholder="Image" id="img-post" multiple="multiple">
                                                            <!-- <input id="img-post" name="file-upload" type="file" class="sr-only "> -->
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button type="submit"
                                            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Add
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

    afterRender() {
        const formAdd = document.querySelector("#form-add");
        const imgPost = document.querySelector("#img-post");
        const imgPreview = document.querySelector("#imgPreview");
        const imgPreview2 = document.querySelector("#imgPreview2");

        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dw78kmsie/image/upload";
        const CLOUDINARY_PREVIEW = "tuantmph13096fpt";

        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
            imgPreview2.src = URL.createObjectURL(e.target.files[1]);
        });

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = [...imgPost.files];
            const listImageUrl = [];
            const uploadImagePromise = (image) => new Promise((resolve, reject) => {
                // lay gia tri cua file upload cho du dung formDtaa
                const formData = new FormData();
                formData.append("file", image);
                formData.append("upload_preset", CLOUDINARY_PREVIEW);

                // call api
                const data = axios.post(CLOUDINARY_API, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });
                resolve(data);
                reject();
            });

            for (let i = 0; i < file.length; i++) {
                await uploadImagePromise(file[i]).then((response) => {
                    listImageUrl.push(response.data.url);
                });
            }

            const postFake = {
                title: document.querySelector("#title-post").value,
                priceNew: document.querySelector("#price-new-post").value,
                priceOld: document.querySelector("#price-old-post").value,
                sale: document.querySelector("#sale").value,
                categoryId: parseInt(document.querySelector("#categoryId").value),
                img: listImageUrl,
                desc: document.querySelector("#desc-post").value,
            };
            add(postFake)
                .then(() => {
                    window.location.href = "/#/admin/posts/index";
                });
        });

        $().ready(() => {
            $("#form-add").validate({
                onfocusout: false,
                onkeyup: false,
                onclick: false,
                rules: {
                    title: {
                        required: true,
                        minlength: 10,
                    },
                    "price-new-post": {
                        required: true,
                        minlength: 7,
                    },
                    "price-old-post": {
                        required: true,
                        minlength: 7,
                    },
                    sale: {
                        required: true,
                        minlength: 2,
                    },
                    cate: {
                        required: true,
                        minlength: 7,
                    },
                    about: {
                        require: true,
                    },

                },
                messages: {
                    title: {
                        required: "Bắt buộc nhập email",
                        minlength: "Hãy nhập ít nhất 5 ký tự",
                    },
                    "price-new-post": {
                        required: "Bắt buộc nhập price new post",
                        maxlength: "Bạn không được nhập quá 7 kí tự",
                    },
                    "price-old-post": {
                        required: "Bắt buộc nhập price new post",
                        maxlength: "Bạn không được nhập quá 7 kí tự",
                    },
                    sale: {
                        required: "Bắt buộc nhập sale",
                        maxlength: "Bạn không được nhập quá 2 kí tự",
                    },
                    cale: {
                        required: "Bắt buộc nhập cale",
                        maxlength: "Bạn không được nhập quá 2 kí tự",
                    },
                    about: {
                        required: "Bắt buộc nhập cale",
                    },
                },
            });
        });
    },
};

export default Add;