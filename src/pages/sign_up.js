import Header from "../components/header";
import Footer from "../components/footer";

const SignUpPage = {
    render() {
        return /* html */`
        ${Header.render()}
        <div class="bg-gray-100 flex justify-center">
            <div class="py-6 px-8 h-100 w-96 mt-20 mb-20 bg-white rounded shadow-xl">
                <form action="">
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
                    <div>
                        <label for="repassword" class="block text-gray-800 font-bold">Retype Password:</label>
                        <input type="repassword" name="repassword" id="repassword" placeholder="Re Password" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
                    </div>
                    <button class="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Sign Up</button>
                </form>
            </div>
        </div>
        ${Footer.render()}`;
    },
};

export default SignUpPage;