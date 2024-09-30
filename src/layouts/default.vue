<template>
	<div>
		<tawk-header></tawk-header>
		<tawk-search></tawk-search>
		<router-view></router-view>
	</div>
</template>

<script>
import Header from '../components/Header.vue'
import Search from '../components/Search.vue';

export default {
	components:{
		'tawk-header': Header,
		'tawk-search': Search,
	}
}
</script>
