import toastr from "toastr";
import Header from "../components/header";
import Footer from "../components/footer";
import { signup } from "../api/user";
import "toastr/build/toastr.min.css";
/* eslint-disable import/order */
// eslint-disable-next-line no-unused-vars
import validate from "jquery-validation";
// eslint-disable-next-line import/no-extraneous-dependencies
import $ from "jquery";

const SignUpPage = {
    render() {
        return /* html */`
        <style>
            label.error{
                color: red;
            }
        </style>
        ${Header.render()}
        <div class="bg-gray-100 flex justify-center">
            <div class="py-6 px-8 h-100 w-96 mt-20 mb-20 bg-white rounded shadow-xl w-[500px]">
                <form id="signupform">
                    <div class="mb-6">
                        <label for="name" class="block text-gray-800 font-bold">Name:</label>
                        <input type="text" name="name" id="name" placeholder="username" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block text-gray-800 font-bold">Email:</label>
                        <input type="text" name="email" id="email" placeholder="@email" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block text-gray-800 font-bold">Password:</label>
                        <input type="password" name="password" id="password" placeholder="Password" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
                    </div>
                    <!-- <div>
                        <label for="repassword" class="block text-gray-800 font-bold">Retype Password:</label>
                        <input type="repassword" name="repassword" id="repassword" placeholder="Re Password" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
                    </div> -->
                    <button class="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Sign Up</button>
                </form>
            </div>
        </div>
        ${Footer.render()}`;
    },

    afterRender() {
        const formSignUp = document.querySelector("#signupform");
        formSignUp.addEventListener("submit", async (e) => {
            e.preventDefault();

            try {
            // call api
                const { data } = await signup({
                    name: document.querySelector("#name").value,
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                // add localStorage
                localStorage.setItem("user", JSON.stringify(data.user));
                toastr.success("Đăng kí thành công");

                if (data.user) {
                    setTimeout(() => {
                        document.location.href = "./signin";
                    }, 2000);
                }
            } catch (error) {
                toastr.error(error.response.data);
                document.querySelector("#signupform").reset();
            }
        });

        $().ready(() => {
            $("#signupform").validate({
                onfocusout: false,
                onkeyup: false,
                onclick: false,
                rules: {
                    name: {
                        required: true,
                        minlength: 10,
                    },
                    email: {
                        required: true,
                        minlength: 10,
                    },
                    password: {
                        required: true,
                        minlength: 8,
                    },

                },
                messages: {
                    name: {
                        required: "Bắt buộc nhập email",
                        minlength: "Hãy nhập ít nhất 5 ký tự",
                    },
                    email: {
                        required: "Bắt buộc nhập email",
                        minlength: "Hãy nhập ít nhất 5 ký tự",
                    },
                    password: {
                        required: "Bắt buộc nhập password",
                        minlength: "Hãy nhập ít nhất 5 ký tự",
                    },
                },
            });
        });
    },
};

export default SignUpPage;