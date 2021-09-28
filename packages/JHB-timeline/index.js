import JHBTimeline from './src';
JHBTimeline.install = function (Vue, options) {
    JHBTimeline.configure = options[JHBTimeline.name];
    Vue.component(JHBTimeline.name, JHBTimeline)
}

export default JHBTimeline