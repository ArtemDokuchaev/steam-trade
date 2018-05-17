<template>
	<div class="grid">
		<!-- <div class="header">header</div>
		<div class="inventory">inventory</div>
		<div class="message">message</div>
		<div class="offer">offer</div> -->
		<app-header></app-header>
		<app-inventory></app-inventory>
		<app-chat></app-chat>
		<app-offer></app-offer>
	</div>
</template>
<script>
	import TradeHeader from './TradeHeader'
	import Inventory from './Inventory'
	import Chat from './chat/Chat'
	import Offer from './Offer'
	export default {
		data() {
			return {

			}
		},
		components: {
			appHeader: TradeHeader,
			appInventory: Inventory,
			appChat: Chat,
			appOffer: Offer
		}
	}
</script>

<style scoped>
	.grid {
		margin: auto;
		border: 1px solid orange;
		width: 810px;
		display: grid;
		grid-gap: 10px;
		grid-template-areas: "header header"
							 "inventory offer"
							 "chat offer"
							 "profile profile";
		grid-template-columns: repeat(2, 400px);
	    grid-template-rows: 100px 500px 200px 100px;

 		justify-content: center;
	}
	.profile {
		background-color: white;
	}
</style>