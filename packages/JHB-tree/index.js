import JHBTree from './src';
JHBTree.install = function (Vue, options) {
    JHBTree.configure = options[JHBTree.name];
    Vue.component(JHBTree.name, JHBTree)
}

export default JHBTree