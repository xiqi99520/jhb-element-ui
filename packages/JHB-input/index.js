import JHBInput from './src';
JHBInput.install = function (Vue, options) {
    JHBInput.configure = options[JHBInput.name];
    Vue.component(JHBInput.name, JHBInput)
}

export default JHBInput