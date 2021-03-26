<template>

	<v-main style="padding:0;">
		<v-main fill-height fluid style="font-size: 12px;padding:0">
			<img class="img-thumbnail" src="https://i.imgur.com/R4JVyGB.png" />

			Resources:
			<ol>
				<li><a href="https://vcvrack.com/manual/Building#">https://vcvrack.com/manual/Building#</a></li>
				<li><a href="https://vcvrack.com/docs/index">https://vcvrack.com/docs/index</a></li>
			</ol>

		</v-main>
	</v-main>

</template>

<script>
	export default {
		name: 'defaultVCV',
		mounted: function () {
            this.$store.commit('loading', false)
        }
	}
</script>