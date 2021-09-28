import JHBCascader from './src';
JHBCascader.install = function (Vue, options) {
    JHBCascader.configure = options[JHBCascader.name];
    Vue.component(JHBCascader.name, JHBCascader)
}

export default JHBCascader