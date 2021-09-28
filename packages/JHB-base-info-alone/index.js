import JHBBaseInfoAlone from './src';
JHBBaseInfoAlone.install = function (Vue, options) {
    JHBBaseInfoAlone.configure = options[JHBBaseInfoAlone.name];
    Vue.component(JHBBaseInfoAlone.name, JHBBaseInfoAlone)
}

export default JHBBaseInfoAlone