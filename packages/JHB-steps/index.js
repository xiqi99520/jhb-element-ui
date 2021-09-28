import JHBSteps from './src';
JHBSteps.install = function (Vue, options) {
    JHBSteps.configure = options[JHBSteps.name];
    Vue.component(JHBSteps.name, JHBSteps)
}

export default JHBSteps