import JHBPagination from './src';
JHBPagination.install = function (Vue, options) {
    JHBPagination.configure = options[JHBPagination.name];
    Vue.component(JHBPagination.name, JHBPagination)
}

export default JHBPagination