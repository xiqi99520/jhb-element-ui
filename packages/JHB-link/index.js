import JHBLink from './src';
JHBLink.install = function (Vue, options) {
    JHBLink.configure = options[JHBLink.name];
    Vue.component(JHBLink.name, JHBLink)
}

export default JHBLink