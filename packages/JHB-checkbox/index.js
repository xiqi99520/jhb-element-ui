import JHBCheckbox from './src';
JHBCheckbox.install = function (Vue, options) {
    JHBCheckbox.configure = options[JHBCheckbox.name];
    Vue.component(JHBCheckbox.name, JHBCheckbox)
}

export default JHBCheckbox