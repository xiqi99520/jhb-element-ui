import JHBTimePicker from './src';
JHBTimePicker.install = function (Vue, options) {
    JHBTimePicker.configure = options[JHBTimePicker.name];
    Vue.component(JHBTimePicker.name, JHBTimePicker)
}

export default JHBTimePicker