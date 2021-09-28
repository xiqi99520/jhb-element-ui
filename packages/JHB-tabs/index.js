import JHBTabs from './src';
JHBTabs.install = function (Vue, options) {
    JHBTabs.configure = options[JHBTabs.name];
    Vue.component(JHBTabs.name, JHBTabs)
}

export default JHBTabs