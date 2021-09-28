import JHBRadioGroup from './src';
JHBRadioGroup.install = function (Vue, options) {
    JHBRadioGroup.configure = options[JHBRadioGroup.name];
    Vue.component(JHBRadioGroup.name, JHBRadioGroup)
}

export default JHBRadioGroup