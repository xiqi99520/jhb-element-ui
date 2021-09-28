import JHBSelect from './src';
JHBSelect.install = function (Vue, options) {
    JHBSelect.configure = options[JHBSelect.name];
    Vue.component(JHBSelect.name, JHBSelect)
}

export default JHBSelect