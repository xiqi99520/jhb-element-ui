import JHBMerchantDevice from './src';
JHBMerchantDevice.install = function (Vue, options) {
    JHBMerchantDevice.configure = options[JHBMerchantDevice.name];
    Vue.component(JHBMerchantDevice.name, JHBMerchantDevice)
}

export default JHBMerchantDevice