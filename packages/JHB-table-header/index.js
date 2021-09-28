import JHBTableHeader from './src';
JHBTableHeader.install = function (Vue, options) {
    JHBTableHeader.configure = options[JHBTableHeader.name];
    Vue.component(JHBTableHeader.name, JHBTableHeader)
}

export default JHBTableHeader