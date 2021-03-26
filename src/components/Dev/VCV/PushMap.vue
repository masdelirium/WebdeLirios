<template>

	<v-main style="padding:0">
		<v-main fill-height fluid style="padding:0">
			<button style="float: right;font-size: 12px;" v-on:click="open('https://github.com/xnamahx/RackdeLirios');">Source Code <v-icon>mdi-github</v-icon></button>
			<img class="img-thumbnail" src="https://i.imgur.com/1MAs6AJ.jpg" />
			
			<br/>
			<br/>
			<div style="font-size: 12px;">
			Resources:
			<ol>
				<li><a href="https://github.com/VCVRack/Rack/blob/v1/src/core/MIDI_Map.cpp">https://github.com/VCVRack/Rack/blob/v1/src/core/MIDI_Map.cpp</a></li>
				<li><a href="https://github.com/ed9m/ed9m_vcv">https://github.com/ed9m/ed9m_vcv</a></li>
			</ol>
			</div>
		</v-main>
	</v-main>

</template>

<script>
	export default {
		name: 'PushMap',
		mounted: function () {
			this.$store.commit('loading', false);
		}

	}
</script>