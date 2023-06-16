<template>
    <div class="test-card-link">
        <div v-for="(item, i) in value"
             :key="i"
             class="test-card-item">
            <a rel="external nofollow"
               :href="item.link"
               target="_blank"
               :title="item.title">
               {{ item.title }}
            </a>
        </div>
    </div>
</template>

<script setup>
    import { ref, defineProps } from "vue";
    const props = defineProps({
        value: Object
    });
    const value = ref(props.value);
</script>
<style lang="scss" scope>
    button {
        background-color: #4e6ef2
    }
    .test-card-link {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        text-align: center;
        line-height: 38px;
        .test-card-item {
            background: blue;
            width: 113px;
            max-width: 138px;
            height: 38px;
            cursor: pointer;
            overflow: hidden;
        }
        .test-card-item:nth-of-type(2n) {
            background: rgba(44, 104, 255, .1);
        }
        .test-card-item:nth-of-type(2n+1) {
            background: rgba(56, 203, 137, .1);
        }
    }
</style>
