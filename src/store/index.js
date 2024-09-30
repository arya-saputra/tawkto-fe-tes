import { defineStore } from 'pinia';
import { getCategories, getAuthor } from '../services/api';

export const useTopicStore = defineStore('topicStore', {
    state: () => ({
        category:{},
        categories:[],
        article:{},
        author:{}
    }),
    actions: {
        setCategory(data) {
            this.category = data;
        },
        getCategories() {
            getCategories().then((response) => {
                this.categories = response.data;
            })
        },
        setArticle(data) {
            this.article = data;
        },
        getAuthor(data) {
            getAuthor(data).then((res) => {
                this.article.author = res.data;
                this.author = res.data;
            })
        }
    }
});