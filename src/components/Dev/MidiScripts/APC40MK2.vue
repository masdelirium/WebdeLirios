<template>

	<v-main style="padding:0">
		<v-main fill-height fluid style="padding:0">
			<button style="float: right;font-size: 12px;" v-on:click="open('https://github.com/xnamahx/APC40_MkIIx');">Source Code <v-icon>mdi-github</v-icon></button>
			<img class="img-thumbnail" src="https://i.imgur.com/HrNMo2r.png" />

			<br/>
			<br/>
			<div style="font-size: 12px;">
			Resources:
			<ol >
				<li><a href="http://martinpechmann.github.io/APC400000/">http://martinpechmann.github.io/APC400000/</a></li>
				<li><a href="https://github.com/cylab/APCequencer">https://github.com/cylab/APCequencer</a></li>
			</ol>
			</div>

		</v-main>
	</v-main>

</template>

<script>
	export default {
		name: 'APC40MkII',
		mounted: function () {
            this.$store.commit('loading', false)
        }
	}
</script>