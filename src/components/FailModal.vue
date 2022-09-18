<template>
	<div class="modal-backdrop">
		<div class="modal-content">
			<div class="modal-title">
				Game Over!
			</div>
			<div class="modal-body">
				<span class="fail-icon">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 256 256" xml:space="preserve">

<defs>
</defs>
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
	<path d="M 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 C 90 69.813 69.813 90 45 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(236,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 28.902 66.098 c -1.28 0 -2.559 -0.488 -3.536 -1.465 c -1.953 -1.952 -1.953 -5.118 0 -7.07 l 32.196 -32.196 c 1.951 -1.952 5.119 -1.952 7.07 0 c 1.953 1.953 1.953 5.119 0 7.071 L 32.438 64.633 C 31.461 65.609 30.182 66.098 28.902 66.098 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 61.098 66.098 c -1.279 0 -2.56 -0.488 -3.535 -1.465 L 25.367 32.438 c -1.953 -1.953 -1.953 -5.119 0 -7.071 c 1.953 -1.952 5.118 -1.952 7.071 0 l 32.195 32.196 c 1.953 1.952 1.953 5.118 0 7.07 C 63.657 65.609 62.377 66.098 61.098 66.098 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
</g>
</svg>
				</span>
				<p>Bad News! Your answer is incorrect.</p>
			</div>
			<div class="modal-footer">
				<div class="button-group justify-content-center">
					<button
						@click="tryAgain"
						type="button"
						class="btn btn-success bg-dark">
						Try Again
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "FailModal",
	methods: {
		tryAgain: function () {
			this.$store.dispatch('handleFailModal')
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