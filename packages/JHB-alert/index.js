import JHBAlert from './src';
JHBAlert.install = function (Vue, options) {
    JHBAlert.configure = options[JHBAlert.name];
    Vue.component(JHBAlert.name, JHBAlert)
}

export default JHBAlert