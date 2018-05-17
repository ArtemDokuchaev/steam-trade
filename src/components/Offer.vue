<template>
	<div class="offer">
		<div class="your-name">
			<h1>{{yourName}}</h1>
		</div>
		<draggable v-model="yourOffer" class="your-offer" :options="options">
			<div v-for="(img, index) in yourOffer"><img :src="img"></div>
		</draggable>
		<div class="their-name">
			<h1>{{theirName}}</h1>
		</div>
		<draggable v-model="theirOffer" class="their-offer" :options="options">
				<div v-for="(img, index) in theirOffer"><img :src="img"></div>
		</draggable>
		<div class="cancel">
			<button @click="cancelTrade">Cancel trade</button>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			yourName: 'Your name',
			theirName: 'Their name',
			options: {
				group:'skins',
				animation: 200,
				sort: false,

			}
		}
	},
	computed: {
		yourOffer: {
			get() {
				return this.$store.state.yourOffer;
			},
			set(value) {
				this.$store.commit('updateYourOffer', value);
			}
		},
		theirOffer: {
			get() {
				return this.$store.state.theirOffer;
			},
			set(value) {
				this.$store.commit('updateTheirOffer', value);
			}
		}
	},
	methods: {
		cancelTrade() {

		}
	}
}
</script>

<style scoped>
	.offer {
		grid-area: offer;
		background-color: #fff;
		display: grid;
		grid-gap: 5px;
		grid-template-areas:	"your-name your-name"
								"your-offer your-offer"
								"their-name their-name"
								"their-offer their-offer"
								"cancel cancel";
		grid-template-columns: 45% 45%;
		grid-template-rows: 50px 250px 50px 250px 50px;

		justify-content: center;
	}
	.your-name {
		grid-area: your-name;
	}
	.their-name {
		grid-area: their-name;
	}
	.your-offer {
		padding-top: 10px;
		border: 1px solid black;
		grid-area: your-offer;
		display: grid;
		grid-gap: 5px;
		grid-template-columns: repeat(3, 100px);
		grid-auto-rows: 100px;

		overflow: auto;
		background-color: #a3c0ff;
		justify-content: center;
	}
	.their-offer {
		padding-top: 10px;
		border: 1px solid black;
		grid-area: their-offer;
		display: grid;
		grid-gap: 5px;
		grid-template-columns: repeat(3, 100px);
		grid-auto-rows: 100px;

		overflow: auto;
		background-color: #a3c0ff;
		justify-content: center;
	}
	.your-offer > div{
		background-color: white;
	}

</style>
