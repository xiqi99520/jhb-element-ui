import JHBCheckboxGroup from './src';
JHBCheckboxGroup.install = function (Vue, options) {
    JHBCheckboxGroup.configure = options[JHBCheckboxGroup.name];
    Vue.component(JHBCheckboxGroup.name, JHBCheckboxGroup)
}

export default JHBCheckboxGroup