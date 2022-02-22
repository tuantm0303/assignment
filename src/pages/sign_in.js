/* eslint-disable import/order */
import toastr from "toastr";
import Header from "../components/header";
import Footer from "../components/footer";
import { signin } from "../api/user";
import "toastr/build/toastr.min.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import $ from "jquery";
// eslint-disable-next-line no-unused-vars
import validate from "jquery-validation";

const SignInPage = {
    render() {
        return /* html */`
        <style>
            label.error{
                color: red;
            }
        </style>
        ${Header.render()}
        <div class="bg-gray-100 flex justify-center">
            <div class="py-6 px-8 h-80 mt-20 mb-20 bg-white rounded shadow-xl w-[500px]">
                <form id="signinform">
                    <div class="mb-6">
                        <label for="name" class="block text-gray-800 font-bold">Email:</label>
                        <input type="email" name="email" id="email" placeholder="@email" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
                    </div>
                    <div>
                        <label for="password" class="block text-gray-800 font-bold">Password:</label>
                        <input type="password" name="password" id="password" placeholder="password" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
                    </div>
                    <button class="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Sign In</button>
                </form>
            </div>
        </div>
        ${Footer.render()}`;
    },

    afterRender() {
        const formSignIn = document.querySelector("#signinform");
        formSignIn.addEventListener("submit", async (e) => {
            e.preventDefault();

            const data = {
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            };
            // call api
            await signin(data);
            // add user vào localStorage
            localStorage.setItem("user", JSON.stringify(data));
            toastr.success("Đăng nhập thành công, vui lòng chờ 3s");
            setTimeout(() => {
                if (data.email === "tuan@gmail.com") {
                    document.location.href = "/#/admin/posts/index";
                } else {
                    document.location.href = "/#/";
                }
            }, 3000);
        });

        $().ready(() => {
            $("#signinform").validate({
                onfocusout: false,
                onkeyup: false,
                onclick: false,
                rules: {
                    email: {
                        required: true,
                        minlength: 10,
                    },
                    password: {
                        required: true,
                        minlength: 6,
                    },

                },
                messages: {
                    email: {
                        required: "Bắt buộc nhập email",
                        minlength: "Hãy nhập ít nhất 5 ký tự",
                    },
                    password: {
                        required: "Bắt buộc nhập password",
                        minlength: "Hãy nhập ít nhất 6 ký tự",
                    },
                },
            });
        });
    },
};

export default SignInPage;