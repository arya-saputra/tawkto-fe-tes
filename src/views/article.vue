<template>
    <section class="detail-container">
        <ul class="breadcrumbs">
            <li class="text-[green]">
                <router-link to="/">
                    All categories
                </router-link>
            </li>
            
            <li class="text-[green]">
                <router-link :to="`/${topicStore.category.id}`">
                    <i class="fa fa-chevron-right mr-2"></i>
                    {{ topicStore.category.title }}
                </router-link>
            </li>
            <li>
                <i class="fa fa-chevron-right mr-2"></i>
                {{ topicStore.article.title }}
            </li>
        </ul>
        <h3 class="article-title">
            <i class="fa mr-2" :class="`fa-${topicStore.article.icon}`"></i>
            {{ topicStore.article.title }}
        </h3>
        <h4 class="article-subtitle">
            <span v-if="topicStore.author">{{ topicStore.author? topicStore.author.name:'' }} |</span>
            {{ moment(topicStore.article.updatedOn) }}</h4>
        <p class="article-body">{{ topicStore.article.content }}</p>
    </section>
</template>
<script>
import { useTopicStore } from '../store';
import time from '../mixins/time';
export default {
    name: 'ArticleSection',
    mixins: [time],
    computed: {
        topicStore() {
            return useTopicStore();
        }
    },
    beforeMount(){
        if (!this.topicStore.article.id) {
            this.$router.push('/');
        }
    },
    mounted() {
        this.topicStore.getAuthor(this.topicStore.article.authorId);
    }
}
</script>