/*eslint-disable*/
import {createStore} from "vuex";
import axios from "axios";
import data from "bootstrap/js/src/dom/data";

export default createStore({
	state: {
		questions: [],
		currentQuestion: 1,
		totalQuestion: 10,
		currentPoint: 0,
		isActiveSuccessModal: false,
		isActiveFailModal: false
	},
	getters: {
		getQuestions: (state) => state.questions
	},
	actions: {
		async fetchQuestions({commit}) {
			try {
				const questions = await axios.get('https://the-trivia-api.com/api/questions?limit=1')
				questions.data[0]["answers"] = [questions.data[0].correctAnswer, ...questions.data[0].incorrectAnswers]
				commit('SET_QUESTIONS', questions.data)
			}
			catch (error) {
				console.log(error)
			}
		},
		
		clearCurrentQuestion() {
			this.state.questions = []
		},
		handleSuccessModal() {
			this.state.isActiveSuccessModal = !this.state.isActiveSuccessModal
		},
		handleFailModal() {
			this.state.isActiveFailModal = !this.state.isActiveFailModal
		},
		increasePoint() {
			this.state.currentPoint += 10
			this.state.currentQuestion += 1
		},
		clearPoint() {
			this.state.currentPoint = 0
			this.state.currentQuestion = 1
		}
	},
	mutations: {
		SET_QUESTIONS(state, questions) {
			state.questions = questions
		}
	}
})