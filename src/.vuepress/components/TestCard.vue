<template>
    <div>
        <div v-for="(item, i) in testCardList"
             :key="i">
            <h3>{{ item.title }}</h3>
            <div>
                <TestCardChild :value="item.children" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import TestCardChild from "./TestCardChild.vue";

    const testCardList = ref([]);
    testCardList.value = [{
        title: "测试Vue组件",
        children: [{
            title: "标题1",
            link: "http://www.baidu.com"
        },{
            title: "标题2",
            link: "http://www.baidu.com"
        },{
            title: "标题3",
            link: "http://www.baidu.com"
        }]
    }];
</script>
