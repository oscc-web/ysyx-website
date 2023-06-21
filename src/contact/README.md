---
title: "联系我们"
icon: "address-card"
isOriginal: true
category: ["联系我们"]
tag: ["一生一芯"]
copyright: false
---

- 线下地址：北京开源芯片研究院
- 交流合作：opensource-talents@bosc.ac.cn
- 问题反馈：miaoyuyang@ict.ac.cn

::: info 交流渠道
> | 微信公众号 | B站视频号 |
> |:---:|:---:|
> | <a qrcode-container :href="qrcodeWeChat" target="_blank"><qrcode-vue :value="qrcodeWeChat" :render-as="qrcodeRenderAs" :margin="qrcodeMargin" :level="qrcodeLevel" /></a> | <a qrcode-container :href="qrcodeBiliBili" target="_blank"><qrcode-vue :value="qrcodeBiliBili" :render-as="qrcodeRenderAs" :margin="qrcodeMargin" :level="qrcodeLevel" /></a> |
:::

<style lang="scss" scoped>
    [qrcode-container] {
        display: block;
        border-radius: 5px;
        overflow: hidden;
        width: 100px;
        height: 100px;
    }
</style>

<script>
    import QrcodeVue from "qrcode.vue";

    export default {
        data() {
            return {
                qrcodeRenderAs: "svg",
                qrcodeMargin: 3,
                qrcodeLevel: "L",
                qrcodeWeChat: "http://weixin.qq.com/r/VRPOytXE8h2OKZGpb0bR",
                qrcodeBiliBili: "https://space.bilibili.com/2107852263"
            }
        },
        components: {
            QrcodeVue
        }
    }
</script>
