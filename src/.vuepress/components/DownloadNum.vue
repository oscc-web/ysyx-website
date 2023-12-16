<template>
    <div>
        <a
            href="/res/files/RISC-V开放架构设计之道-v1.0.0.pdf"
            target="_blank"
            @click="setBooksDownloadNum">电子版
        </a>
        <div>下载次数：{{ count }}</div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import axios from "axios";

    axios.defaults.baseURL = "https://101.43.238.97:9090";
    let count = ref(0);

    const getBooksDownloadNum = () => {
        axios.post(
            "/api/getBooksDownloadNum",
            JSON.stringify({
                id: "riscv-reader"
            }
        )).then((res) => {
            console.log(res);
            if (res.data.msg === "success") {
                count.value = res.data.data;
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    const setBooksDownloadNum = () => {
        axios.post(
            "/api/setBooksDownloadNum",
            JSON.stringify({
                id: "riscv-reader"
            }
        )).then((res) => {
            console.log(res);
            if (res.data.msg === "success") {
                getBooksDownloadNum();
            }
            else {
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    getBooksDownloadNum();

</script>
