<template>
    <section class="detail-container">
        <ul class="breadcrumbs">
            <li>
                <a href="/">
                    All categories
                </a>
            </li>
            
            <li>
                <i class="fa fa-chevron-right"></i>
                {{ topicStore.category.title }}
            </li>
        </ul>

        <div class="detail-wrapper">
            <Feature :data="topicStore.category"></Feature>

            <div class="detail-item">
                <CardLong v-for="item in publishedPosts" :data="item" :key="item.id"></CardLong>
            </div>
        </div>

        <hr />
        
        <h3 class="other-title">Other Categories</h3>

        <div class="other-categories">
            <button class="nav prev" @click="page=page-1" :class="page == 1? 'opacity-5':''" :disabled="page == 1">
                <i class="fa fa-chevron-left"></i>
            </button>
            <div v-for="topic in otherTopics.slice(pageStart, pageStart+perPage)" class="other-item">
                <Card :data="topic"></Card>
            </div>
            <button class="nav next" @click="page=page+1" :class="page == totalPage? 'opacity-5':''" :disabled="page == totalPage">
                <i class="fa fa-chevron-right"></i>
            </button>
        </div>
    </section>
</template>
<script>
import { getCategory } from '../services/api';
import { useTopicStore } from '../store/index';
import Card from '../components/elements/Card.vue';
import CardLong from '../components/elements/CardLong.vue';
import Feature from '../components/elements/Feature.vue';


export default {
    name: "Detail",
    components: {
        Card,
        CardLong,
        Feature,
    },
    data() {
        return {
            detail:{},
            page: 1,
            perPage:3,
        }
    },
    beforeMount(){
        if (!this.topicStore.category.id) {
            this.$router.push('/');
        }
    },
    mounted() {
        this.init();
    },
    computed: {
        topicStore() {
            return useTopicStore();
        },
        publishedPosts() {
            return this.detail && this.detail.data? this.detail.data.filter(art => art.status == 'published'):[]
        },
        otherTopics() {
            let data = [];

            if (this.topicStore.categories.length) {
                this.topicStore.categories.filter(a => a.enabled).map(item => {
                    if (this.topicStore.category.id!==item.id) {
                        data.push(item);
                    }
                });
            }

            return data;
        },
        pageStart() {
            return (this.page - 1) * this.perPage;
        },
        totalPage(){
            return Math.ceil(this.otherTopics.length / this.perPage);
        }
    },
    methods: {
        init() {
            const id = this.$route.params.id;
            getCategory(id).then((res) => {
                this.detail = res;
                this.topicStore.getCategories();
            });
        }
    }
}
</script>