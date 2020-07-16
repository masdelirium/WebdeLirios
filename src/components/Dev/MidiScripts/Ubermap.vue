<template>

	<v-main style="padding:0">
		<v-main fill-height fluid style="padding:0">
			
			<img class="img-thumbnail" src="https://i.imgur.com/tMazzg0.jpg" />
			
			<a href="https://github.com/tomduncalf/ubermap">https://github.com/tomduncalf/ubermap</a>
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
		name: 'Parasitos',
		mounted: function () {
            this.$store.commit('loading', false)
        }
	}
</script>