<template>
    <div class="topic-card" @click="gotoDetail(data)">
        <img :src="`../../assets/images/${data.icon}.png`" class="w-[30%] mx-auto transition-all hover:scale-[1.1]" :alt="data.title" />
        <h3 class="topic-title">{{ data.title }}</h3>
        
        <h5 class="topic-count">{{ data.totalArticle }} articles</h5>
        <p class="topic-time">Last updated {{ moment(data.updatedOn) }}</p>
    </div>
</template>
<script>
import { useTopicStore } from '../../store/index';
import time from '../../mixins/time';

export default {
    props: {
        data: {
            type: Object,
            default: () => ({
                title: '',
                icon:'',
                totalArticle: 0,
                updated:0,
            })
        },
    },
    mixins:[time],
    computed: {
        topicStore() {
            return useTopicStore();
        }
    },
    methods: {
        gotoDetail(data) {
            this.topicStore.setCategory(data);
            this.$router.push(`/${data.id}`);
        }
    }
}
</script>