/* eslint-disable import/prefer-default-export */
export const reRender = async (component, element) => {
    if (component) {
        document.querySelector(element).innerHTML = await component.render();
    }
    if (component.afterRender) await component.afterRender();
};