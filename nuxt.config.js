require('dotenv').config();
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'taskTools',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { 
        src: 'https://kit.fontawesome.com/977f303f7f.js',
        crossorigin: 'anonymous'
      }
    ],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
		'@nuxtjs/style-resources',
		[
			'@nuxtjs/firebase',
		 {	
			 config: {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGEBUCKET,
        messagingSenderId: process.env.MESSAGINGSENDERID,
        appId: process.env.APPID
      },	 
      services: {
        firestore: true,
        database: true,
      }	
		 }
  	],
	],	

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    //共通CSS
    '@/assets/css/common.css',
  ],
  styleResources: {
    scss: [
      '@/assets/scss/_variable.scss'
    ]
  },	
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
		/*'@/plugins/firebase.js',*/
		{src:'@/plugins/vee-validate'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
/*	privateRuntimeConfig: {
		API_KEY: process.env.API_KEY,
		AUTH_DOMAIN: process.env.AUTH_DOMAIN,
		PROJECT_ID: process.env.PROJECT_ID,
		STORAGEBUCKET: process.env.STORAGEBUCKET,
		MESSAGINGSENDERID: process.env.MESSAGINGSENDERID,
		APPID: process.env.APPID,
	},*/
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
		transpile: [
			"vee-validate/dist/rules"
		]
  }
}
