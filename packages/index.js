import JHBButton from './JHB-button'
import JHBLink from './JHB-link'
import JHBRadio from './JHB-radio'
import JHBRadioButton from './JHB-radio-button'
import JHBCheckbox from './JHB-checkbox'
import JHBCheckboxButton from './JHB-checkbox-button'
import JHBInput from './JHB-input'
import JHBInputNumber from './JHB-input-number'
import JHBCascader from './JHB-cascader'
import JHBTimeSelect from './JHB-time-select'
import JHBTimePicker from './JHB-time-picker'
import JHBDatePicker from './JHB-date-picker'
import JHBTabs from './JHB-tabs'
import JHBResult from './JHB-result'
import JHBTag from './JHB-tag'
import JHBSwitch from './JHB-switch'
import JHBPagination from './JHB-pagination'
import JHBColorPicker from './JHB-color-picker'
import JHBRate from './JHB-rate'
import JHBBadge from './JHB-badge'
import JHBProgress from './JHB-progress'
import JHBSlider from './JHB-slider'
import JHBSteps from './JHB-steps'
import JHBTimeline from './JHB-timeline'
import JHBUpload from './JHB-upload'
import JHBCard from './JHB-card'
import JHBRadioGroup from './JHB-radio-group'
import JHBCheckboxGroup from './JHB-checkbox-group'
import JHBTree from './JHB-tree'
import JHBAlert from './JHB-alert'
import JHBSelect from './JHB-select'
import JHBMerchantStatistics from './JHB-merchant-statistics'
import JHBTable from './JHB-table'
import JHBBaseInfo from './JHB-base-info'
import JHBTableHeader from './JHB-table-header'
import JHBMerchantProfile from './JHB-merchant-profile'
import JHBMerchantPhotos from './JHB-merchant-photos'
import JHBPayType from './JHB-pay-type'
import JHBMerchantDevice from './JHB-merchant-device'
import JHBMerchantSettlement from './JHB-merchant-settlement'
import JHBBaseInfoAlone from './JHB-base-info-alone'


const components = [
  JHBLink,
  JHBRadio,
  JHBRadioButton,
  JHBCheckbox,
  JHBCheckboxButton,
  JHBInput,
  JHBInputNumber,
  JHBCascader,
  JHBTimeSelect,
  JHBTimePicker,
  JHBDatePicker,
  JHBTabs,
  JHBButton,
  JHBResult,
  JHBTag,
  JHBSwitch,
  JHBPagination,
  JHBColorPicker,
  JHBRate,
  JHBBadge,
  JHBProgress,
  JHBSlider,
  JHBSteps,
  JHBTimeline,
  JHBUpload,
  JHBCard,
  JHBRadioGroup,
  JHBCheckboxGroup,
  JHBTree,
  JHBAlert,
  JHBSelect,
  JHBMerchantStatistics,
  JHBTable,
  JHBBaseInfo,
  JHBTableHeader,
  JHBMerchantProfile,
  JHBMerchantPhotos,
  JHBPayType,
  JHBMerchantDevice,
  JHBMerchantSettlement,
  JHBBaseInfoAlone
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  JHBButton,
  JHBLink,
  JHBRadio,
  JHBRadioButton,
  JHBCheckbox,
  JHBCheckboxButton,
  JHBInput,
  JHBInputNumber,
  JHBCascader,
  JHBTimeSelect,
  JHBTimePicker,
  JHBDatePicker,
  JHBTabs,
  JHBResult,
  JHBTag,
  JHBSwitch,
  JHBPagination,
  JHBColorPicker,
  JHBBadge,
  JHBProgress,
  JHBSlider,
  JHBSteps,
  JHBTimeline,
  JHBUpload,
  JHBCard,
  JHBRadioGroup,
  JHBCheckboxGroup,
  JHBTree,
  JHBAlert,
  JHBSelect,
  JHBMerchantStatistics,
  JHBTable,
  JHBBaseInfo,
  JHBTableHeader,
  JHBMerchantProfile,
  JHBMerchantPhotos,
  JHBPayType,
  JHBMerchantDevice,
  JHBMerchantSettlement,
  JHBBaseInfoAlone,
  install
}

export {
  JHBButton,
  JHBLink,
  JHBRadio,
  JHBRadioButton,
  JHBCheckbox,
  JHBCheckboxButton,
  JHBInput,
  JHBInputNumber,
  JHBCascader,
  JHBTimeSelect,
  JHBTimePicker,
  JHBDatePicker,
  JHBTabs,
  JHBResult,
  JHBTag,
  JHBSwitch,
  JHBPagination,
  JHBColorPicker,
  JHBRate,
  JHBBadge,
  JHBProgress,
  JHBSlider,
  JHBSteps,
  JHBTimeline,
  JHBUpload,
  JHBCard,
  JHBRadioGroup,
  JHBCheckboxGroup,
  JHBTree,
  JHBAlert,
  JHBSelect,
  JHBMerchantStatistics,
  JHBTable,
  JHBBaseInfo,
  JHBTableHeader,
  JHBMerchantProfile,
  JHBMerchantPhotos,
  JHBPayType,
  JHBMerchantDevice,
  JHBMerchantSettlement,
  JHBBaseInfoAlone,
  install
}