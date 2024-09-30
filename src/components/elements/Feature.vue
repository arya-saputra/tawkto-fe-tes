<template>
    <div class="feature-container">
        <div class="feature-head">
            <div class="feature-icon">
                <i class="fa fa-file mr-1"></i>
                <span class="text-[14px]">{{ data.totalArticle }}</span>
            </div>
            <img :src="`../assets/images/${data.icon}.png`" :alt="data.title" />
            <h3>{{ data.title }}</h3>
            <p class="feature-time">Last update {{ moment(data.updatedOn) }}</p>
        </div>
        <hr />
        <div class="feature-body">
            <i class="fa fa-info-circle"></i>
            <p class="px-8 mt-3">{{ data.description }}</p>
        </div>
    </div>
</template>
<script>
import time from '../../mixins/time';
export default {
    props: {
        data:{
            type: Object,
            default: () => {
                return {
                    totalArticle:'',
                    icon:'',
                    title:'',
                    description:'',
                    updatedOn:''
                }
            }
        }
    },
    mixins: [time],
}
</script>