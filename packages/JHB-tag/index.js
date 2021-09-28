import JHBTag from './src';
JHBTag.install = function (Vue, options) {
    JHBTag.configure = options[JHBTag.name];
    Vue.component(JHBTag.name, JHBTag)
}

export default JHBTag