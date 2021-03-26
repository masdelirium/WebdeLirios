<template>

	<v-main style="padding:0">
		<v-main fill-height fluid style="padding:0">
			<button style="float: right;font-size: 12px;" v-on:click="open('https://github.com/xnamahx/Push2x');">Source Code <v-icon>mdi-github</v-icon></button>
			<img class="img-thumbnail" src="https://i.imgur.com/BaQBycP.png" />
			
			<br/>
			<br/>
			<div style="font-size: 12px;">
			Resources:
			<ol>
				<li><a href="https://github.com/Ableton/push-interface/blob/master/doc/AbletonPush2MIDIDisplayInterface.asc">https://github.com/Ableton/push-interface/blob/master/doc/AbletonPush2MIDIDisplayInterface.asc</a></li>
			</ol>
			</div>
		</v-main>
	</v-main>

</template>

<script>
	export default {
		name: 'Push2',
		mounted: function () {
            this.$store.commit('loading', false)
        }
	}
</script>