<template>

	<v-main style="padding:0;">
		<v-main fill-height fluid style="font-size: 12px;padding:0">

			Resources:
			<ol>
				<li><a href="https://help.ableton.com/hc/en-us/articles/209774285-Using-Control-Surfaces">https://help.ableton.com/hc/en-us/articles/209774285-Using-Control-Surfaces</a></li>
				<li><a href="https://docs.cycling74.com/max8/vignettes/live_object_model">https://docs.cycling74.com/max8/vignettes/live_object_model</a></li>
				<li><a href="http://remotescripts.blogspot.com/">http://remotescripts.blogspot.com/</a></li>
				<li><a href="https://julienbayle.studio/ableton-live-midi-remote-scripts/">https://julienbayle.studio/ableton-live-midi-remote-scripts/</a></li>
				<li><a href="https://nsuspray.github.io/Live_API_Doc/10.1.0.xml">https://nsuspray.github.io/Live_API_Doc/10.1.0.xml</a></li>
				<li><a href="http://blogs.bl0rg.net/netzstaub/2008/08/15/writing-ableton-control-surface-scripts/">http://blogs.bl0rg.net/netzstaub/2008/08/15/writing-ableton-control-surface-scripts/</a></li>
			</ol>

		</v-main>
	</v-main>

</template>

<script>
	export default {
		name: 'defaultScript',
		mounted: function () {
            this.$store.commit('loading', false)
        }
	}
</script>