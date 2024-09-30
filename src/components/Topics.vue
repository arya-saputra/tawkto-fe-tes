<template>
    <section class="topic-container">
        <div class="topic-wrapper">
            <div v-for="topic in enabledTopics" class="topic-item">
                <Card :data="topic" :key="topic.id"></Card>
            </div>
        </div> 
    </section>
</template>
<script>
import { getCategories } from "../services/api";
import { useTopicStore } from '../store/index';
import Card from "./elements/Card.vue";

export default {
    name: "TopicsSection",
    components: {
        Card
    },
    data() {
        return {
            categories: []
        }
    },
    mounted() {
        getCategories().then((res) => {
            this.categories = res.data;
        });
    },
    computed: {
        enabledTopics() {
            return this.categories.length? this.categories.filter(category => category.enabled).sort((a,b) => a.order - b.order):[];
        },
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