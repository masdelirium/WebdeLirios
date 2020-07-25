<template>

	<v-main style="padding:0">
		<v-main fill-height fluid style="padding:0">

			<p>Plateau es un módulo de reverberación de placa basado en el famoso diseño Dattorro (1997), y está diseñado para hacer que un parche seco y sin vida suene exuberante, profundo y espacioso. Sin embargo, a diferencia de otros reverberadores, Plateau intenta ir más allá, proporcionando una amplia variedad de combinaciones y opciones de control.</p>
			<br/>
			<br/>
			
			<button style="float: right;font-size: 12px;" v-on:click="open('https://github.com/xnamahx/PlanchasDeReverberacion');">Source Code <v-icon>mdi-github</v-icon></button>
			<img class="maxdev-thumbnail" src="https://i.imgur.com/aEyTbOB.png" />
			
			<br/>
			<br/>
			<div style="font-size: 12px;">
			<ol>
			Resources:
				<li><a href="https://valleyaudio.github.io/rack/plateau/index.html">https://valleyaudio.github.io/rack/plateau/index.html</a></li>
			</ol>
			</div>
			
		</v-main>
	</v-main>

</template>

<script>
	export default {
		name: 'Planchas',
		mounted: function () {
            this.$store.commit('loading', false)
        }
	}
</script>