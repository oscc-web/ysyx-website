<template>
    <el-row :gutter="20">
        <el-col style="text-align:center;">
            <el-button type="primary"
                       @click="setBooksDownloadNum">
                {{ bookInfoBtn.download.title }}
            </el-button>
            <el-button type="danger"
                       disabled>
                {{ bookInfoBtn.submit.title }}
            </el-button>
            <el-popover
                trigger="hover"
                width="150"
                placement="right">
                <template #reference>
                    <el-button type="success">
                        {{ bookInfoBtn.buy.title }}
                    </el-button>
                </template>
                <template #default>
                    <a :href="bookBuyQrcode.value" target="_blank">
                        <qrcode-vue :value="bookBuyQrcode.value"
                                    :size="bookBuyQrcode.size"
                                    :render-as="bookBuyQrcode.renderAs"
                                    :margin="bookBuyQrcode.margin"
                                    :level="bookBuyQrcode.level" />
                    </a>
                </template>
            </el-popover>
        </el-col>
        <el-divider style="margin-top:10px;" />
        <el-col>
            <li>原著作者：{{ bookInfo.authors }}</li>
            <li>翻译团队：{{ bookInfo.translators }}</li>
            <li>审核校对：{{ bookInfo.reviewers }}</li>
            <li>下载次数：{{ bookInfo.downloadNum }}</li>
            <li>发布日期：{{ bookInfo.date }}</li>
            <li>最新版本：{{ bookInfo.version }}</li>
        </el-col>
    </el-row>
</template>

<script setup>
    import { reactive } from "vue"
    import axios from "axios";
    import QrcodeVue from "qrcode.vue";

    const bookBuyQrcode = reactive({
        value: "https://item.m.jd.com/product/14304044.html",
        size: 120,
        renderAs: "svg",
        margin: 0,
        level: "L",
        background: "#ffffff",
        foreground: "#000000",
        class: ""
    })
    let bookInfo = reactive({
        authors: "大卫·帕特森、安德鲁·沃特曼",
        translators: "勾凌睿、陈璐、刘志刚",
        reviewers: "余子濠、包云岗",
        downloadNum: 0,
        date: "2023-12-13",
        version: "1.0.0"
    })
    const bookInfoBtn = reactive({
        download: {
            title: "下载书籍",
            url: "/res/files/RISC-V开放架构设计之道-v1.0.0.pdf"
        },
        submit: {
            title: "提交勘误"
        },
        buy: {
            title: "购买链接"
        }
    })

    axios.defaults.baseURL = "https://ysyx.oscc.cc/api/";

    const getBooksDownloadNum = () => {
        axios.post(
            "getBooksDownloadNum",
            JSON.stringify({
                id: "riscv-reader"
            }
        )).then((res) => {
            if (res.data.msg === "success") {
                bookInfo.downloadNum = res.data.data;
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    const setBooksDownloadNum = () => {
        window.open(bookInfoBtn.download.url)
        axios.post(
            "setBooksDownloadNum",
            JSON.stringify({
                id: "riscv-reader"
            }
        )).then((res) => {
            if (res.data.msg === "success") {
                getBooksDownloadNum();
            }
            else {
            }
        }).catch((err) => {
            console.log(err);
        });
    }
</script>

<style scoped lang="scss">

</style>
