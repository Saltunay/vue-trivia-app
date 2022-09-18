<template>
	<div class="app-header position-fixed">
		<div class="app-name">
			Vue Trivia App Example
		</div>
		<div class="score-panel">
			<span>{{this.$store.state.currentQuestion}} question of {{this.$store.state.totalQuestion}} questions</span>
			<span>Your Score: {{this.$store.state.currentPoint}}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "PageHeader"
}
</script>

<style scoped>
.app-header {
	background: #f5f3f4;
	width: 100%;
	z-index: 1;
	padding: 16px;
	color: #161a1d;
	box-shadow: 0 0 8px -4px #f5f3f4;
	top: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
}

.score-panel > span {
	display: block;
	margin-bottom: 4px;
}
</style>