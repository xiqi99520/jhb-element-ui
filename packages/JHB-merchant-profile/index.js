import JHBMerchantProfile from './src';
JHBMerchantProfile.install = function (Vue, options) {
    JHBMerchantProfile.configure = options[JHBMerchantProfile.name];
    Vue.component(JHBMerchantProfile.name, JHBMerchantProfile)
}

export default JHBMerchantProfile