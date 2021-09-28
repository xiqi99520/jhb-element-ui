import JHBPayType from './src';
JHBPayType.install = function (Vue, options) {
    JHBPayType.configure = options[JHBPayType.name];
    Vue.component(JHBPayType.name, JHBPayType)
}

export default JHBPayType