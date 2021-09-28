import JHBSlider from './src';
JHBSlider.install = function (Vue, options) {
    JHBSlider.configure = options[JHBSlider.name];
    Vue.component(JHBSlider.name, JHBSlider)
}

export default JHBSlider