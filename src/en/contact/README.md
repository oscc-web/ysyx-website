---
title: Contact us
---

- Exchange cooperation：ysyx@bosc.ac.cn
- Question feedback
  - General：ysyx@bosc.ac.cn
  - Website：miaoyuyang@ict.ac.cn

:::info Exchange ways

> |                                                                          WeChat Official Account                                                                          |                                                                             BiliBili Video Account                                                                            |
> | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
> | <a qrcode-container :href="qrcodeWeChat" target="_blank"><qrcode-vue :value="qrcodeWeChat" :render-as="qrcodeRenderAs" :margin="qrcodeMargin" :level="qrcodeLevel" /></a> | <a qrcode-container :href="qrcodeBiliBili" target="_blank"><qrcode-vue :value="qrcodeBiliBili" :render-as="qrcodeRenderAs" :margin="qrcodeMargin" :level="qrcodeLevel" /></a> |
> |                                                                                    None                                                                                   |                                                                                       No                                                                                      |

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
                qrcodeBiliBili: "https://space.bilibili.com/2107852263",
                qrcodeQQGroup1: "https://qm.qq.com/cgi-bin/qm/qr?k=qfzc76aZKhWiGsvvwyD0FKItOzT4oOAM&authKey=GZkf718BlVaHpRoAvWWI89nK+Mx3AF5pDmPgkhByS29A6mUzokmRaBjtCFwDRnGx&noverify=0",
                qrcodeQQGroup2: "https://qm.qq.com/cgi-bin/qm/qr?k=CpWjuhJiMhyf3vLL5d3mFKoknUPhI0-w&authKey=S1VNGrCvTn4wkwk0UQVKTZbhXBay0jHN6D4eQ7DHPuFTYoKLuyDHIAKwyHWPl3sm&noverify=0",
                qrcodeQQGroup3: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Z3w4cAQ3YMp1SGhKVEYE6_C0w2XzJEhO&authKey=3nj56P2ItNDezb9o%2FgqaOs09%2FNX0UWLSRXM41FpQ6Vua8iQRGWI%2FvNNHdRRdtTLu&noverify=0&group_code=621039593"
            }
        },
        components: {
            QrcodeVue
        }
    }
</script>
