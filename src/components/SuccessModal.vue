<template>
	<div class="modal-backdrop">
		<div class="modal-content">
			<div class="modal-title">
				Correct!
			</div>
			<div class="modal-body">
				<span class="success-icon">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
						<circle style="fill:#25AE88;" cx="25" cy="25" r="25"/>
						<polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points="  38,15 22,33 12,25 "/>
					</svg>
				</span>
				<p v-if="this.$store.state.currentQuestion < 10">Congrats! Your answer is correct. You get more 10 point.</p>
				<p v-else>Congrats! You done quiz successfully.</p>
			</div>
			<div class="modal-footer">
				<div class="button-group justify-content-center">
					<button
						v-if="this.$store.state.currentQuestion < 10"
						@click="nextQuestion"
						type="button"
						class="btn btn-success bg-dark">
						Next Question
					</button>
					<button
						v-else
						@click="endGame"
						type="button"
						class="btn btn-success bg-dark">
						Get Quiz Again
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SuccessModal",
	methods: {
		nextQuestion: function () {
			this.$store.dispatch('fetchQuestions')
			this.$store.dispatch('handleSuccessModal')
			this.$store.dispatch('increasePoint')
		},
		
		endGame: function () {
			this.$store.dispatch('handleSuccessModal')
			this.$store.dispatch('fetchQuestions')
			this.$store.dispatch('clearPoint')
		}
	}
}
</script>

<style scoped>
.modal-content {
	background: #F5F3F4;
	max-width: 60%;
	border-radius: 6px;
	box-sizing: border-box;
}

.modal-backdrop {
	background: rgb(52 58 64 / 50%);
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 1 !important;
}

.modal-title {
	padding: 24px;
	background: #161a1d;
	color: #f5f3f4;
	border-radius: 6px 6px 0 0;
}

.modal-body {
	padding: 16px 24px;
}

.modal-body > span {
	display: block;
	margin: 12px auto;
	width: 120px;
	height: 120px;
	overflow: hidden;
}

.modal-body > p {
	margin: 12px auto;
	text-align: center;
}

.modal-footer {
	padding: 24px;
}

</style>