<template>

	<v-main style="padding:0">
		<v-main fill-height fluid style="padding:0">

			<p>
				Bolitas ofrece tres disparadores y cuatro voltajes, a los que se aplican múltiples características de comportamiento girando las perillas. El lado izquierdo del módulo se ocupa de disparadores, con el lado opuesto distribuyendo patrones aleatorios y no tan aleatorios.
			</p>
			<p>
				Deja Vu, que permite reutilizar algunas (o todas) las decisiones de siembra al azar. Impresionantemente, nada de esto es complicado. Entonces, si bien vale la pena leer el manual desde el primer día, las recompensas están disponibles desde el principio.
			</p>
			<br/>
			<br/>
			
			<button style="float: right;font-size: 12px;" v-on:click="window.open('https://github.com/xnamahx/BolitasMutantes', '_blank');">Source Code <v-icon>mdi-github</v-icon></button>

			<img class="maxdev-thumbnail" src="https://i.imgur.com/n7omzls.png" />

			
			<img class="maxdev-thumbnail" src="https://i.imgur.com/o7e237m.png" />
			
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
		name: 'Bolitas',
		mounted: function () {
            this.$store.commit('loading', false)
        }
	}
</script>