<template>
	<div class="header">
		<div>Header</div>
		<div class="sign-in" v-if="!$store.getters.isUserAuth"><button @click="login">Sign in</button></div>
		<div class="sign-in" v-if="$store.getters.isUserAuth">
			<app-profile v-if="$store.getters.isUserAuth"></app-profile>
		</div>
	</div>
</template>

<script>
import {coreComponents} from 'ds-ui-core'
import Profile from './Profile'
  export default {
    mixins: [coreComponents.coreSignIn],
   
    components: {
		appProfile: Profile
	}

  }
</script>

<style>
	.header {
		grid-area: header;
		background-color: #fff;
		display: block;
	}
	.header > div {
		margin: 10px;
		display: inline-block;
	}
	.sign-in {
		display: inline-block;
		float: right;
	}
</style>
