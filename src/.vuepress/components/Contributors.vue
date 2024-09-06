<template>
    <div class="contributors">
        <span>贡献者：</span>
        <span v-for="(contributor, index) in contributors" :key="contributor.name">
            <a :href="contributor.profile" target="_blank">{{ contributor.name }}</a>
            <span v-if="index !== contributors.length - 1">, </span>
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            contributors: {
                type: Array,
                required: true
            }
        }
    };
</script>

<style scoped>
    .contributors {
    }
</style>