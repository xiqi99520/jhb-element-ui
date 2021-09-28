import JHBCheckboxButton from './src';
JHBCheckboxButton.install = function (Vue, options) {
    JHBCheckboxButton.configure = options[JHBCheckboxButton.name];
    Vue.component(JHBCheckboxButton.name, JHBCheckboxButton)
}

export default JHBCheckboxButton