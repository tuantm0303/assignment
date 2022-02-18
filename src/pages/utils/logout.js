import toastr from "toastr";

// eslint-disable-next-line import/prefer-default-export
export const logout = document.querySelector("#logout");
logout.addEventListener("click", () => {
    localStorage.removeItem("user");
    toastr.success("Bạn đã đăng xuất");
});