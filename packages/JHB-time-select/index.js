import JHBTimeSelect from './src';
JHBTimeSelect.install = function (Vue, options) {
    JHBTimeSelect.configure = options[JHBTimeSelect.name];
    Vue.component(JHBTimeSelect.name, JHBTimeSelect)
}

export default JHBTimeSelect