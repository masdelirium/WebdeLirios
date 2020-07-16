<template>

	<v-main style="padding:0">
		<v-main fill-height fluid style="padding:0">

			<p>Parasitos Oliverb es un nuevo modo de reverberación creativa basado en una descripción del Lexicon 480L e inspirado en el diseño del Erbe Verb, con control CV sobre todos los parámetros. Es en gran medida sin modelado, probablemente poco realista y va mucho más allá de su reverberación tradicional.</p>
			<br/>
			<br/>
			
			<button style="float: right;font-size: 12px;" v-on:click="window.open('https://github.com/xnamahx/ParasitosDeOliver', '_blank');">Source Code <v-icon>mdi-github</v-icon></button>
			<img class="maxdev-thumbnail" src="https://i.imgur.com/yBZqeuU.png" />
			
			<br/>
			<br/>
			<div style="font-size: 12px;">
			<ol>
			Resources:
				<li><a href="https://mqtthiqs.github.io/parasites/clouds.html">https://mqtthiqs.github.io/parasites/clouds.html</a></li>
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