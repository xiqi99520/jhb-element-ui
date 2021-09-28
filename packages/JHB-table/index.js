import JHBTable from './src';
JHBTable.install = function (Vue, options) {
    JHBTable.configure = options[JHBTable.name];
    Vue.component(JHBTable.name, JHBTable)
}

export default JHBTable