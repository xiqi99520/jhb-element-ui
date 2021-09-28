import JHBInputNumber from './src';
JHBInputNumber.install = function (Vue, options) {
    JHBInputNumber.configure = options[JHBInputNumber.name];
    Vue.component(JHBInputNumber.name, JHBInputNumber)
}

export default JHBInputNumber