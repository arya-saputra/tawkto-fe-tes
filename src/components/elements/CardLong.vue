<template>
    <div class="long-card" @click="gotoDetail(data)">
        <i class="fa" :class="`fa-${data.icon}`"></i>
        <div class="long-card-body">
            <h3>{{ data.title }}</h3>
            <p class="long-card-time">Last update {{ moment(data.updateOn) }}</p>
        </div>
        <i class="fa fa-chevron-right"></i>
    </div>
</template>
<script>
import time from '../../mixins/time';
import { useTopicStore } from '../../store';
export default {
    mixins:[time],
    props: {
        data: {
            type: Object,
            default: () => ({
                icon: '',
                title: '',
                updated:''
            })
        }
    },
    computed: {
        topicStore() {
            return useTopicStore();
        }
    },
    methods: {
        gotoDetail(data) {
            this.topicStore.setArticle(data);
            this.$router.push(`/article/${data.id}`);
        }
    }
}
</script>