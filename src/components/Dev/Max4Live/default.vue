<template>

	<v-main style="padding:0;">
		<v-main fill-height fluid>

			<p>El popular lenguaje visual de Cycling ’74 permite integrar componentes customizados al entorno Ableton Live. Estos dispositivos combinan el poder de C/C++ y software libre, con la capacidad de Max para intergar DSP a su amigable GUI estandarizada.</p>

			<ol>
			Resources:
				<li><a href="https://cycling74.com/sdk/max-sdk-8.0.3/html/index.html">https://cycling74.com/sdk/max-sdk-8.0.3/html/index.html</a></li>
				<li><a href="https://books.google.com.ar/books?id=1KI7BAAAQBAJ&pg=PA19&source=gbs_toc_r&cad=4#v=onepage&q&f=false">https://books.google.com.ar/books?id=1KI7BAAAQBAJ&pg=PA19&source=gbs_toc_r&cad=4#v=onepage&q&f=false</a></li>
				<li><a href="http://cycling74.github.io/min-devkit/">http://cycling74.github.io/min-devkit/</a></li>
				<li><a href="https://github.com/Cycling74/max-devkit">https://github.com/Cycling74/max-devkit</a></li>
				<li><a href="https://julienbayle.studio/ableton-live-midi-remote-scripts/">https://julienbayle.studio/ableton-live-midi-remote-scripts/</a></li>
				<li><a href="http://peabody.sapp.org/class/dmp2/read/WritingMax_MSPExternals.pdf">http://peabody.sapp.org/class/dmp2/read/WritingMax_MSPExternals.pdf</a></li>
				<li><a href="http://www.music.mcgill.ca/~ich/classes/mumt402/MaxMSPExternalsTutorial3.1.pdf">http://www.music.mcgill.ca/~ich/classes/mumt402/MaxMSPExternalsTutorial3.1.pdf</a></li>
			</ol>

		</v-main>
	</v-main>

</template>

<script>
	export default {
		name: 'defaultMax',
		mounted: function () {
            this.$store.commit('loading', false)
        }
	}
</script>