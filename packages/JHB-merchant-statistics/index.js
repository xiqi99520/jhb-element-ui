import JHBMerchantStatistics from './src';
JHBMerchantStatistics.install = function (Vue, options) {
    JHBMerchantStatistics.configure = options[JHBMerchantStatistics.name];
    Vue.component(JHBMerchantStatistics.name, JHBMerchantStatistics)
}

export default JHBMerchantStatistics