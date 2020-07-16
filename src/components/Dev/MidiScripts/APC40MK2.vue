<template>

	<v-main style="padding:0">
		<v-main fill-height fluid style="padding:0">
			<img class="img-thumbnail" src="https://i.imgur.com/HrNMo2r.png" />

			<a href="https://github.com/xnamahx/APC40_MkIIx">https://github.com/xnamahx/APC40_MkIIx</a>
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