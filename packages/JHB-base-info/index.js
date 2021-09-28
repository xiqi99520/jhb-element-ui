import JHBBaseInfo from './src';
JHBBaseInfo.install = function (Vue, options) {
    JHBBaseInfo.configure = options[JHBBaseInfo.name];
    Vue.component(JHBBaseInfo.name, JHBBaseInfo)
}

export default JHBBaseInfo