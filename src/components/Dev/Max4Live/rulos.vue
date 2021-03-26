<template>

	<v-main style="padding:0">
		<v-main fill-height fluid style="padding:0">

			<p>
				Rulos es un Macro-Oscilador de algoritmos múltiples que proporciona todo, desde FM hasta síntesis de voz, emulación de percusión analógica, tablas de ondas, síntesis modal y síntesis granular.
			</p>
			<br/>
			<br/>
			
			<button style="float: right;font-size: 12px;" v-on:click="open('https://github.com/xnamahx/RulosMutantes');">Source Code <v-icon>mdi-github</v-icon></button>

			<img class="maxdev-thumbnail" src="https://i.imgur.com/HthF8IY.png" />
			
			<br/>
			<br/>
			<div style="font-size: 12px;">
			<ol>
			Resources:
				<li><a href="https://mutable-instruments.net/modules/plaits/">https://mutable-instruments.net/modules/plaits/</a></li>
			</ol>
			</div>
			
		</v-main>
	</v-main>

</template>

<script>
	export default {
		name: 'Rulos',
		mounted: function () {
            this.$store.commit('loading', false)
        }
	}
</script>