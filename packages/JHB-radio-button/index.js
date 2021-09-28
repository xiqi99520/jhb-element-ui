import JHBRadioButton from './src';
JHBRadioButton.install = function (Vue, options) {
    JHBRadioButton.configure = options[JHBRadioButton.name];
    Vue.component(JHBRadioButton.name, JHBRadioButton)
}

export default JHBRadioButton