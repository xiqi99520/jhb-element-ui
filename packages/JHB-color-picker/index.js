import JHBColorPicker from './src';
JHBColorPicker.install = function (Vue, options) {
    JHBColorPicker.configure = options[JHBColorPicker.name];
    Vue.component(JHBColorPicker.name, JHBColorPicker)
}

export default JHBColorPicker