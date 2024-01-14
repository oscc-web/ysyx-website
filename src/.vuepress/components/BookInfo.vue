<template>
    <el-row :gutter="20">
        <el-col style="text-align:center;">
            <el-button
                type="primary"
                @click="setInfoBooksDownloadNum">
                下载书籍
            </el-button>
            <el-button
                type="danger"
                @click="openFormWindow">
                提交勘误
            </el-button>
            <el-popover
                trigger="hover"
                width="150"
                placement="right">
                <template #reference>
                    <el-button type="success">
                        购买链接
                    </el-button>
                </template>
                <template #default>
                    <a :href="qrcodeBase.value" target="_blank">
                        <qrcode-vue :value="qrcodeBase.value"
                                    :size="qrcodeBase.size"
                                    :render-as="qrcodeRenderAs"
                                    :margin="qrcodeBase.margin"
                                    :level="qrcodeLevel" />
                    </a>
                </template>
            </el-popover>
            <el-dialog
                v-model="diagBookError"
                title="勘误表单"
                append-to-body>
                <template #default>
                    <el-form
                        ref="formRuleRef"
                        :model="formObj"
                        :rules="formRules"
                        status-icon>
                        <el-form-item
                            label="姓名"
                            :label-width="formLabelWidth"
                            prop="user">
                            <el-input
                                v-model="formObj.user"
                                placeholder="请输入提交者姓名" />
                        </el-form-item>
                        <el-form-item
                            label="邮箱"
                            :label-width="formLabelWidth"
                            prop="email">
                            <el-input
                                v-model="formObj.email"
                                placeholder="请输入提交者邮箱" />
                        </el-form-item>
                        <el-form-item
                            label="页码"
                            :label-width="formLabelWidth"
                            prop="page">
                            <el-input
                                v-model.number="formObj.page"
                                placeholder="请输入错误所在的页码" />
                        </el-form-item>
                        <el-form-item
                            label="提交日期"
                            :label-width="formLabelWidth"
                            prop="date">
                            <el-input v-model="formObj.date" disabled />
                        </el-form-item>
                        <el-form-item
                            label="具体内容"
                            :label-width="formLabelWidth"
                            prop="contents">
                            <el-input
                                type="textarea"
                                v-model="formObj.contents"
                                placeholder="请输入错误和修正内容"
                                :autosize="{ minRows: 5}" />
                        </el-form-item>
                    </el-form>
                </template>
                <template #footer>
                    <span>
                        <el-button type="default" @click="diagBookError = false">取消</el-button>
                        <el-button type="primary" @click="handleFormSubmit(formRuleRef);">确认</el-button>
                    </span>
                </template>
            </el-dialog>
        </el-col>
        <el-divider style="margin-top:10px;" />
        <el-col>
            <li>原著作者：{{ infoBook.authors }}</li>
            <li>翻译团队：{{ infoBook.translators }}</li>
            <li>审核校对：{{ infoBook.reviewers }}</li>
            <li>
                <span>下载次数：</span>
                <span class="infoDownloadNum"
                      v-loading="infoLoading"
                      :element-loading-spinner="infoLoadingSVG"
                      element-loading-svg-view-box="-10, -10, 50, 50"
                      element-loading-custom-class="load">
                      {{ infoBook.downloadNum }}
                </span>
            </li>
            <li>发布日期：{{ infoBook.date }}</li>
            <li>最新版本：{{ infoBook.version }}</li>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
    import { ref } from "vue"
    import type { FormInstance, FormRules } from "element-plus"
    import axios from "axios";
    import moment from "moment";
    import qrcodeVue, { RenderAs, Level } from "qrcode.vue";
    import { config } from "../config-dynamic.ts";

    let diagBookError = ref(false)

    const formLabelWidth = "100px"
    interface FormRule {
        user: string
        email: string
        page: number
        date: string
        contents: string
    }
    const formRuleRef = ref<FormInstance>()
    const formObj = ref<FormRule>({
        user: "",
        email: "",
        page: 0,
        date: "",
        contents: ""
    })
    const formRules = ref<FormRules<FormRule>>({
        user: [{
            required: true,
            message: "请输入提交者姓名",
            trigger: "blur"
        }],
        email: [{
            required: true,
            message: "请输入提交者邮箱",
            trigger: "blur"
        }, {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
        }],
        page: [{
            required: true,
            message: "请输入错误所在的页码",
            trigger: "blur"
        }, {
            type: "number",
            message: "页码必须是数字类型",
        }],
        date: [{
            required: true,
            message: "请输入提交错误的日期",
            trigger: "blur"
        }],
        contents: [{
            required: true,
            message: "请输入错误和修正内容",
            trigger: "blur"
        }]
    })
    const openFormWindow = () => {
        diagBookError.value = true;
        formObj.value.date = moment().format("yyyy-MM-DD HH:mm:ss");
    }
    const handleFormSubmit = async (formIns: FormInstance | undefined) => {
        if (!formIns) return
        await formIns.validate((valid, fields) => {
            if (valid) {
                axios.post(
                    "setBooksErrorInfo",
                    JSON.stringify(
                        Object.assign({
                            name: "riscv-reader",
                            type: "error"
                        }, formObj.value)
                    )
                ).then((res) => {
                    if (res.data.msg === "success") {
                        Object.keys(formObj.value).forEach(key => {
                            if (key === "page") {
                                formObj.value[key] = 0
                            }
                            else {
                                formObj.value[key] = ""
                            }
                        });
                        diagBookError.value = false;
                    }
                    else {
                    }
                }).catch((err) => {
                    console.log(err);
                });
            }
        });
    }

    const qrcodeBase = ref({
        value: "https://item.m.jd.com/product/14304044.html",
        size: 120,
        margin: 0,
        background: "#ffffff",
        foreground: "#000000"
    });
    const qrcodeRenderAs = ref<RenderAs>("svg")
    const qrcodeLevel = ref<Level>("L")

    let infoBook = ref({
        authors: "大卫·帕特森、安德鲁·沃特曼",
        translators: "勾凌睿、陈璐、刘志刚",
        reviewers: "余子濠、包云岗",
        downloadNum: 0,
        date: "2023-12-13",
        version: "1.0.0"
    });
    const infoLoading = ref(true);
    const infoLoadingSVG = `<path class="path" d="M 30 15
                                                  L 28 17
                                                  M 25.61 25.61
                                                  A 15 15, 0, 0, 1, 15 30
                                                  A 15 15, 0, 1, 1, 27.99 7.5
                                                  L 15 15"
                                   style="stroke-width:4px; fill:rgba(0,0,0,0)"
                            />`;

    axios.defaults.baseURL = config.baseURL;

    const getInfoBooksDownloadNum = () => {
        infoLoading.value = true;
        axios.post(
            "getBooksDownloadNum",
            JSON.stringify({
                name: "riscv-reader",
                type: "statis"
            }
        )).then((res) => {
            infoLoading.value = false;
            if (res.data.msg === "success") {
                infoBook.value.downloadNum = res.data.data;
            }
            else {
                infoBook.value.downloadNum = 0;
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    const setInfoBooksDownloadNum = () => {
        window.open("/res/files/RISC-V开放架构设计之道-v1.0.0.pdf")
        axios.post(
            "setBooksDownloadNum",
            JSON.stringify({
                name: "riscv-reader",
                type: "statis"
            }
        )).then((res) => {
            if (res.data.msg === "success") {
                getInfoBooksDownloadNum();
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    getInfoBooksDownloadNum();
</script>

<style lang="scss">
    .infoDownloadNum .el-loading-spinner .circular {
        width: 30px !important;
    }
</style>
