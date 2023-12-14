<template>
    <div>
        <a
            href="/res/files/RISC-V开放架构设计之道-v1.0.0.pdf"
            target="_blank"
            @click="setCountNum">电子版
        </a>
        <div>下载次数：{{ count }}</div>
    </div>
</template>

<script setup>

    import { ref } from "vue";
    import axios from "axios";

    let count = ref(0);

    const getCountNum = () => {
        axios.get("http://localhost:9090/api/getBooksRISCVReader").then((res) => {
        console.log(res);
        if (res.data.msg === "success") {
            count.value = res.data.data;
        }
        }).catch((err) => {
            console.log(err);
        });
    }

    const setCountNum = () => {
        axios.get("http://localhost:9090/api/setBooksRISCVReader").then((res) => {
            console.log(res);
            if (res.data.msg === "success") {
                getCountNum();
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    getCountNum();

</script>
