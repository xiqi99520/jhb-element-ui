/**
 * 根据传递过来的按钮基本风格，确定plain是否生效
 */
//定义常量，防止后续名称修改，可以直接在此处修改 全局生效
 const ButtonBaseStyleConstant = {
    Primary: "Primary",
    Stroke: "Stroke",
    Secondary: "Secondary"
 }
 const Primary = {
    plain: false
 }
 const Stroke = {
     plain: true,
 }
 const Secondary = {
     plain: false,
 }

const ButtonBaseStyle = {
    Primary,
    Stroke,
    Secondary
}

export {ButtonBaseStyle,ButtonBaseStyleConstant}