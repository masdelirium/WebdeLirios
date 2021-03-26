<template>

	<v-main style="padding:0">
		<v-main fill-height fluid style="padding:0">

			<p>
				Argolla toma sonidos sin pitch, como clics y pulsaciones, y mediante procesos de modelado físico genera tonos armónicos musicales en respuesta.
			</p>
			<br/>
			<br/>
			
			<button style="float: right;font-size: 12px;" v-on:click="open('https://github.com/xnamahx/ArgollasMutantes');">Source Code <v-icon>mdi-github</v-icon></button>

			<img class="maxdev-thumbnail" src="https://i.imgur.com/3HVB6im.png" />
			
			<br/>
			<br/>
			<div style="font-size: 12px;">
			<ol>
			Resources:
				<li><a href="https://mutable-instruments.net/modules/rings/">https://mutable-instruments.net/modules/rings/</a></li>
			</ol>
			</div>
			
		</v-main>
	</v-main>

</template>

<script>
	export default {
		name: 'Argollas',
		mounted: function () {
            this.$store.commit('loading', false)
        }
	}
</script>