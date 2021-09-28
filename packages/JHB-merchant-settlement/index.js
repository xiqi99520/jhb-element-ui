import JHBMerchantSettlement from './src';
JHBMerchantSettlement.install = function (Vue, options) {
    JHBMerchantSettlement.configure = options[JHBMerchantSettlement.name];
    Vue.component(JHBMerchantSettlement.name, JHBMerchantSettlement)
}

export default JHBMerchantSettlement