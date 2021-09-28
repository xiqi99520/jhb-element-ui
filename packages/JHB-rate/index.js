import JHBRate from './src';
JHBRate.install = function (Vue, options) {
    JHBRate.configure = options[JHBRate.name];
    Vue.component(JHBRate.name, JHBRate)
}

export default JHBRate