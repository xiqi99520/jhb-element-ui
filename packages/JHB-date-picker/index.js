import JHBDatePicker from './src';
JHBDatePicker.install = function (Vue, options) {
    JHBDatePicker.configure = options[JHBDatePicker.name];
    Vue.component(JHBDatePicker.name, JHBDatePicker)
}

export default JHBDatePicker