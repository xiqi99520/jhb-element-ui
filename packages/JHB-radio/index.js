import JHBRadio from './src';
JHBRadio.install = function (Vue, options) {
    JHBRadio.configure = options[JHBRadio.name];
    Vue.component(JHBRadio.name, JHBRadio)
}

export default JHBRadio