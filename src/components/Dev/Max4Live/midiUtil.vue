<template>

	<v-main style="padding:0">
		<v-main fill-height fluid style="padding:0">

			<p>Filtros de señales MIDI inspirados en secuenciadores Suecos. Mediante random se pueden crear melodias inesperadas, el selector de Loop permite agregar quiebres y alteraciones, </p>
			<div style="float: right;text-align: left;">
				<p>La version Full agrega: 
				<ol style="list-style:disc">
					<li>Memoriza y actua sobre ciertas notas.</li>
					<li>Monitor de Pitch.</li>
					<li>Imprime Pitch en la pantalla de Push 2.</li>
				</ol>
				</p>
			</div>
			<br/>
			<br/>
			
			<img class="maxdev-thumbnail" src="https://i.imgur.com/ZxadzXr.png" />
			
			<br/>
			<br/>

			
		</v-main>
	</v-main>

</template>

<script>
	export default {
		name: 'MidiUtil',
		mounted: function () {
            this.$store.commit('loading', false)
        }
	}
</script>