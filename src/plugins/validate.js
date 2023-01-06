//表单验证
//vue-validate插件：表单验证
import Vue from "vue";
//引入表单验证
import VeeValidate from "vee-validate"
//引入中文验证信息
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate);

//表单验证
//表单验证，默认提示信息为英文，我们要将他改为中文
VeeValidate.Validator.localize('zh_CN', {
    messages: {
        ...zh_CN.messages,
        is: (field) => `${field}必须与密码相同` // 修改内置规则的 message，让确认密码和密码相同
    },
    attributes: { // 给校验的 field 属性名映射中文名称，遇到以下字段，显示后面的中文
        phone: '手机号',
        code: '验证码',
        password: '密码',
        password1: '确认密码',
        isCheck: '协议',
        agree:"同意协议"
    }
})

//自定义校验规则
//定义协议必须打勾同意
VeeValidate.Validator.extend('agree', {
    validate: value => {
        return value
    },
    getMessage: field => field + '必须同意'
})