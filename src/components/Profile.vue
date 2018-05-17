<template>
	<div class="user">
		<div class="user_avatar"><img :src="user.avatar" alt="user avatar"></div>
		<div class="user_username">{{user.username}}</div>
		<div class="user_logout"><button @click="logout">Logout</button></div>
	</div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
import Vue from 'vue'

export default {
	methods: {
    	...mapActions(['logout'])
    },
	computed: {
		user () {
			return this.$store.state.auth.user;
		}
	}
}
</script>

<style scoped>
	.user {
		background-color: #fff;
		width: 120px;
		border: 1px solid black;
	}
	.user_username {
		display: inline-block;
	}
	.user_avatar {
		float: right;
		display: inline-block;
	}
	.user_avatar img {
		height: 40px;
	}
	.user_logout {
		display: inline-block;
	}
</style>
