import JHBUpload from './src';
JHBUpload.install = function (Vue, options) {
    JHBUpload.configure = options[JHBUpload.name];
    Vue.component(JHBUpload.name, JHBUpload)
}

export default JHBUpload