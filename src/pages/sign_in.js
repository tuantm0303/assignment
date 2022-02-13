import toastr from "toastr";
import Header from "../components/header";
import Footer from "../components/footer";
import { signin } from "../api/user";
import "toastr/build/toastr.min.css";

const SignInPage = {
    render() {
        return /* html */`
        ${Header.render()}
        <div class="bg-gray-100 flex justify-center">
            <div class="py-6 px-8 h-80 mt-20 mb-20 bg-white rounded shadow-xl">
                <form id="signinform">
                    <div class="mb-6">
                        <label for="name" class="block text-gray-800 font-bold">Email:</label>
                        <input type="email" name="email" id="email" placeholder="@email" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
                    </div>
                    <div>
                        <label for="password" class="block text-gray-800 font-bold">Password:</label>
                        <input type="password" name="password" id="password" placeholder="password" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
                        <a href="#" class="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600">Forget Password</a>
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
                    document.location.href = "/admin/dashboard";
                } else {
                    document.location.href = "/";
                }
            }, 3000);
        });
    },
};

export default SignInPage;