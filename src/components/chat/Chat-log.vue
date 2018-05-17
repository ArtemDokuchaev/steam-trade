<template>
	<div class="chat-log">
		<app-message v-for="(message, index) in messages" :message="message" :key="index"></app-message>
	</div>
</template>

<script>
import Message from './Message'
export default {
	props: ['messages'],
	components: {
		appMessage: Message
	}
}
</script>
