import JHBBadge from './src';
JHBBadge.install = function (Vue, options) {
    JHBBadge.configure = options[JHBBadge.name];
    Vue.component(JHBBadge.name, JHBBadge)
}

export default JHBBadge