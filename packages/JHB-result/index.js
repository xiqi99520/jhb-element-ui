import JHBResult from './src';
JHBResult.install = function (Vue, options) {
    JHBResult.configure = options[JHBResult.name];
    Vue.component(JHBResult.name, JHBResult)
}

export default JHBResult