<template>
	<div class="d-flex justify-content-center">
		<div class="col-sm-12 col-md-8 col-lg-6">
			<div
				v-for="que in questions"
				:key="que.id"
				class="card">
				<div class="card-title">{{this.$store.state.currentQuestion + '. ' + que.question}}</div>
				<div class="card-body">
					<div
						v-for="(answer, index) in que.answers"
						:key="index"
						class="input-group">
						<input @click="evalAnswer()" type="radio" name="answer" :id="index" :value="answer">
						<label :for="index">{{answer}}</label>
					</div>
				</div>
			</div>
		</div>
	</div>
	<SuccessModal v-if="this.$store.state.isActiveSuccessModal" />
	<FailModal v-if="this.$store.state.isActiveFailModal" />
</template>

<script>
/*eslint-disable*/
import {mapState} from 'vuex'
import SuccessModal from '@/components/SuccessModal'
import FailModal from '@/components/FailModal'
export default {
	name: "QuizComponent",
	components: {
		SuccessModal,
		FailModal
	},
	mounted() {
		this.$store.dispatch('fetchQuestions')
	},
	computed: mapState(['questions']),
	methods: {
		evalAnswer: function () {
			let answer = event.target.value
			if (answer == this.questions.map((que) => {return que.correctAnswer})) return this.isAnswerCorrect()
			return this.isAnswerIncorrect()
			
		},
		
		isAnswerCorrect: function () {
			this.$store.dispatch('clearCurrentQuestion')
			this.$store.dispatch('handleSuccessModal')
		},
		
		isAnswerIncorrect: function () {
			this.$store.dispatch('clearCurrentQuestion')
			this.$store.dispatch('handleFailModal')
		}
	}
}
</script>

<style scoped>

.card {
	padding: 24px;
}

.card-title {
	border-bottom: thin solid #bdc3c7;
	padding-bottom: 17px;
}

.input-group {
	margin-bottom: 8px;
}

input {
	margin-right: 12px;
}

label {
	cursor: pointer;
}

</style>