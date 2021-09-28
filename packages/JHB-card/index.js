import JHBCard from './src';
JHBCard.install = function (Vue, options) {
    JHBCard.configure = options[JHBCard.name];
    Vue.component(JHBCard.name, JHBCard)
}

export default JHBCard