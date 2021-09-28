import JHBMerchantPhotos from './src';
JHBMerchantPhotos.install = function (Vue, options) {
    JHBMerchantPhotos.configure = options[JHBMerchantPhotos.name];
    Vue.component(JHBMerchantPhotos.name, JHBMerchantPhotos)
}

export default JHBMerchantPhotos