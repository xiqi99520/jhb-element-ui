import JHBSwitch from './src';
JHBSwitch.install = function (Vue, options) {
    JHBSwitch.configure = options[JHBSwitch.name];
    Vue.component(JHBSwitch.name, JHBSwitch)
}

export default JHBSwitch