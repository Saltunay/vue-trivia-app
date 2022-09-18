<template>
		<PageHeader />
		<Quiz />
</template>

<script>
import Quiz from './Quiz'
import PageHeader from '@/components/PageHeader'
export default {
  name: 'App',
  components: {
		PageHeader,
		Quiz
	}
}
</script>

<style>
/*reset css*/
html, body {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	background-color: #161A1D !important;
	color: #D3D3D3;
}

div#app {width: 100%;height: 100%;overflow: hidden;padding-top: 120px;}

p {
	margin: 0;
	padding: 0;
}

/*end of reset css*/

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
