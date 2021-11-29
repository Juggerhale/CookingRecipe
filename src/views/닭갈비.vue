<template>
	<div role="group">
		<b-form-input
		id="input-live"
		v-model="inbun"
		:state="nameState"
		aria-describedby="input-live-help input-live-feedback"
		placeholder="몇 인분인지 입력해주세요."
		@change = "changed"
		trim
		></b-form-input>

		<!-- This will only be shown if the preceding input has an invalid state -->
		<b-form-invalid-feedback id="input-live-feedback">
			올바른 값을 입력해주세요
		</b-form-invalid-feedback>
	
		<b-table striped hover :items="items" :fields="fields"></b-table>
	</div>
</template>

<script>
  export default {
	computed: {
      nameState() {
        return this.inbun.length > 0 ? true : false
      }
    },
	methods: {
		changed(value){
			if (value > 0) {
				this.items.forEach((currentElement) => {
					currentElement.양 = currentElement.기준양 * value
				})
			} else{
				this.inbun = ''
			}
		}
	},
    data() {
      return {
		inbun: '',
		fields: [
			{
				key: '재료',
				sortable: true
			},
			{
				key: '양',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
			},
			{
				key: '단위',
				sortable: false
			},
		],
		items: [
			{ 재료: '대파', 기준양: 0.5, 단위: '대', 양: 0},
			{ 재료: '양배추', 기준양: 0.125, 단위: '통', 양: 0},
			{ 재료: '밤고구마', 기준양: 1, 단위: '개', 양: 0},
			{ 재료: '청양고추', 기준양: 1, 단위: '개', 양: 0},
			{ 재료: '깻잎', 기준양: 3, 단위: '장', 양: 0},
			{ 재료: '식용유', 기준양: 1, 단위: '숟가락', 양: 0},
			{ 재료: '통깨', 기준양: 0, 단위: '조금', 양: 0},
			{ 재료: '쫄면사리', 기준양: 0.5, 단위: '인분', 양: 0},
			{ 재료: '떡 사리', 기준양: 5, 단위: '개', 양: 0},
			{ 재료: '닭다리살', 기준양: 300, 단위: 'g', 양: 0},
			{ 재료: '양파', 기준양: 1, 단위: '개', 양: 0},
			{ 재료: '고춧가루', 기준양: 1.5, 단위: '숟가락', 양: 0},
			{ 재료: '설탕', 기준양: 1, 단위: '숟가락', 양: 0},
			{ 재료: '진간장', 기준양: 2, 단위: '숟가락', 양: 0},
			{ 재료: '고추장', 기준양: 1, 단위: '숟가락', 양: 0},
			{ 재료: '굴소스', 기준양: 0.5, 단위: '숟가락', 양: 0},
			{ 재료: '다진마늘', 기준양: 0.5, 단위: '숟가락', 양: 0},
			{ 재료: '쌈장', 기준양: 0.5, 단위: '숟가락', 양: 0},
			{ 재료: '카레가루', 기준양: 0.25, 단위: '숟가락', 양: 0},
			{ 재료: '순후추', 기준양: 0.25, 단위: '숟가락', 양: 0}
		]
      }
    }
  }
</script>
