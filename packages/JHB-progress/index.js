import JHBProgress from './src';
JHBProgress.install = function (Vue, options) {
    JHBProgress.configure = options[JHBProgress.name];
    Vue.component(JHBProgress.name, JHBProgress)
}

export default JHBProgress