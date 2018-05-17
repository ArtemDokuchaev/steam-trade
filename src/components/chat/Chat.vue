<template>
	<div class="chat">
		<div class="header">Chat with </div>
		<app-chat-log :messages="messages"></app-chat-log>
		<div class="message">
			<textarea placeholder="Your message" @keyup.enter="sendMessage" v-model="messageText"></textarea>
			<button @click="sendMessage">Send</button>
		</div>
	</div>
</template>

<script>
import ChatLog from './Chat-log'
export default {
	data () {
		return {
			messageText: '',
			messages: [
				{author: 'Jake', text: 'Some message'},
				{author: this.$store.state.auth.user.username, text: 'Some message'},
				{author: 'Jake', text: 'Some message'},
			],
		}
	},
	methods: {
		sendMessage() {
			if (this.messageText.replace(/\s/g, '').length) {
				this.messages.push({author: this.$store.state.auth.user.username, text: this.messageText});
				this.messageText = '';
			}
		}
	},
	updated() {
		let chatLogWindow = document.querySelector('.chat-log')
		chatLogWindow.scrollTop = chatLogWindow.scrollHeight;
	},
	components: {
		appChatLog: ChatLog
	}
}
</script>

<style scoped>
	* {
		padding: 5px;
	}
	.chat {
		grid-area: chat;
		background-color: #fff;
		display: grid;
		grid-template-areas: 	"header"
								"chat-log"
								"message";

		grid-template-columns: 100%;
		grid-template-rows: 30px 115px 50px;
	}
	.header {
		grid-area: header;
		margin: 0;
		border: 1px solid black;
	}
	.chat-log {
		grid-area: chat-log;
		height: 105px;
		overflow: auto;
		border: 1px solid black;
	}
	.message {
		padding: 0;
		position: relative;
		grid-area: message;
	}
	.message > button {
		position: absolute;
		bottom: 10px;
		right: 10px;
	}
	textarea {
		-webkit-box-sizing: border-box;
       	-moz-box-sizing: border-box;
        box-sizing: border-box;
		width: 100%;
		height: 42px;
		resize: none;
	}
</style>
