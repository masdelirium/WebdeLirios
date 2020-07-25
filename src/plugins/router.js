import Vue from 'vue'
import Router from 'vue-router'

Vue.config.productionTip = false
Vue.use(Router)

export default new Router({
	routes : [
		{
			path: '/',
			name: "Home",	
			component: () => import('@/components/Home.vue') 
		},
		{
			path: '/blog',
			name: "Blog",	
			component: () => import('@/components/Blog/Summary.vue') 
		},	
		{
			path: '/article/:articleid',
			name: "Article",
			component: () => import('@/components/Blog/Article.vue'),
			props: { default: true, sidebar: false }
		},	
		{
			path: '/max4live',
			name: "Max4Live",	
			component: () => import('@/components/Dev/Max4Live/index.vue'),
			children: [
			{
				path: '',
				component: () => import('@/components/Dev/Max4Live/default.vue') 
			},{
				path: 'parasitos',
				component: () => import('@/components/Dev/Max4Live/parasitos.vue') 
			},{
				path: 'planchas',
				component: () => import('@/components/Dev/Max4Live/planchas.vue') 
			},{
				path: 'midiutil',
				component: () => import('@/components/Dev/Max4Live/midiUtil.vue') 
			},{
				path: 'bolitas',
				component: () => import('@/components/Dev/Max4Live/bolitas.vue') 
			},{
				path: 'rulos',
				component: () => import('@/components/Dev/Max4Live/rulos.vue') 
			},{
				path: 'argollas',
				component: () => import('@/components/Dev/Max4Live/argollas.vue') 
			}]
		},
		{
			path: '/midiScripts',
			name: "MidiScripts",	
			component: () => import('@/components/Dev/MidiScripts/index.vue'),
			children: [
			{
				path: '',
				component: () => import('@/components/Dev/MidiScripts/default.vue') 
			},
			{
				path: 'APC40MK2',
				component: () => import('@/components/Dev/MidiScripts/APC40MK2.vue') 
			},{
				path: 'Push2',
				component: () => import('@/components/Dev/MidiScripts/Push2.vue') 
			},{
				path: 'Ubermap',
				component: () => import('@/components/Dev/MidiScripts/Ubermap.vue') 
			}]
		},
		{
			path: '/vcv',
			name: "VCVModules",	
			component: () => import('@/components/Dev/VCV/index.vue'),
			children: [
			{
				path: '',
				component: () => import('@/components/Dev/VCV/default.vue') 
			},{
				path: 'PushMap',
				component: () => import('@/components/Dev/VCV/PushMap.vue') 
			}]
		},
		{
			path: '/music',
			name: "Music",	
			component: () => import('@/components/Music/index.vue') 
		},
		{
			path: '/downloads',
			name: "Downloads",	
			component: () => import('@/components/Downloads/All.vue') 
		},
	]
})