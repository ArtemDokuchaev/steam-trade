<template>
<div class="inventory">
		<div class="buttons">
			<button @click="selectedInventory='your'" v-bind:class="{ active: selectedInventory === 'your'}">Your inventory</button >
			<button @click="selectedInventory='their'" v-bind:class="{ active: selectedInventory === 'their'}">Their inventory</button >
		</div>
		<draggable v-model="inventory" class="items" :options="options" @end="onEnd">
			<div v-for="(img, index) in inventory" :key="index" class="drag"><img :src="img"></div>
		</draggable>
		<div class="filters">
			<!-- <input type="text" id="search_by_name" placeholder="Search item by name"> -->
			<input type="number" placeholder="Min">
			<span>$</span>
			<input type="number" placeholder="Max">
			<span>$</span>
			<select name="" id="">
				<option value="startrack">Startrack</option>
				<option value="stickers">Stickers</option>
				<option value="factory_new">Factory new</option>
				<option value="field_tested">Field-tested</option>
			</select>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			selectedInventory: 'your',
			loop: 12,
			options: {
				group:'skins',
				animation: 200,
				sort: false
			}
		}
	},
	computed: {
		inventory: {
			get() {
				console.log('get')
				return this.$store.state.yourInventory;	
			},
			set(value) {
				console.log('set')
				this.$store.commit('updateInventory', value)
			}
		}
	},
	methods: {
		onEnd(evt) {
			var itemEl = evt.item;// dragged HTMLElement
			/*evt.to;    // target list
			evt.from;  // previous list
			evt.oldIndex;  // element's old index within old parent
			evt.newIndex;*/ 
			console.log("evt.to", evt.to);
			console.log("evt.from", evt.from);
			console.log("evt.oldIndex", evt.oldIndex);
			console.log("evt.newIndex", evt.newIndex);
		}
	}
}
</script>

<style scoped>
	.drag {
		outline: 1px solid blue;
	}
	.inventory {
		grid-area: inventory;
		background-color: #fff;
		display: grid;
		grid-template-areas: 	"buttons"
							 	"items"
							 	"filters";
	}

	.buttons {
		grid-area: buttons;
		justify-self: center;
	}

	.buttons > button {
		width: 171px;
		float: left;
		margin: 0;
		background-color: inherit;
		border: none;
	    outline: none;
	    border-left: 1px solid black;
	    border-right: 1px solid black;
	    
	    cursor: pointer;
	    padding: 10px 16px;
	    transition: 0.3s;
	    font-size: 17px;
	}
	.buttons button:hover {
    	background-color: #ddd;
	}
	.buttons button.active {
    	background-color: #ccc;
	}



	.items {
		width: 330px;
		justify-self: center;
		background-color: #a3c0ff;
		grid-area: items;
		padding: 5px;
		border: 1px black solid;
		overflow: auto;
		display: grid;
		grid-gap: 5px;
		grid-template-columns: repeat(3, 100px);
		grid-template-rows: repeat(4, 100px);

		justify-content: center;
	}



	.filters {
		margin:5px;
		grid-area: filters;
		position: relative;
	}
	.filters > span {
		position: absolute;
		font-size: 20px;
		left: 3px;		
	}
	.filters > input {
		width: 75px;
		font-size: 18px;
		padding-left: 15px;
		border-radius: 5px;
		border: 1px solid black;
	}
	.filters > span:nth-child(2) {
		left: 99px;
	}
	.filters > input:focus {
		border-radius: 0;
		outline-offset: 50px;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	.filters > select {
		font-size: 18px;
	}
</style>
