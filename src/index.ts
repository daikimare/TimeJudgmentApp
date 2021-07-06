// DOM
const judge:any = document.getElementById('judge')
const ans:any = document.getElementById('ans')

const main = () => {
	console.log("app start!")
	console.log("Get DOM")
	console.log(judge)
	console.log(ans)
}
main()

judge.onclick = () => {
	/* time's elements (DOM) */
	// type asertion
	const elementTarget:HTMLInputElement = <HTMLInputElement>document.getElementById('target')
	const elementStart:HTMLInputElement = <HTMLInputElement>document.getElementById('start')
	const elementEnd:HTMLInputElement = <HTMLInputElement>document.getElementById('end')

	// get value
	const target:number = Number(elementTarget.value)
	const start:number = Number(elementStart.value)
	const end:number = Number(elementEnd.value)

	// value check
	if(target<0 || 24<target){
		reset()
		console.log("target:",target)
		alert("判定する時間は0以上24以下の数値で入力してください")
	}
	if(start<0 || 24<start){
		reset()
		alert("判定範囲のスタート時刻は0以上24以下の数値で入力してください")
	}
	if(end<0 || 24<end){
		reset()
		alert("判定範囲の終了時刻は0以上24以下の数値で入力してください")
	}

	/* lenge check　*/
	if (start <= target && target < end) {
		const trueParagraph:HTMLParagraphElement = <HTMLParagraphElement>document.createElement('p')
		const trueCentense = `入力された時刻${target}時は指定した範囲${start}時~${end}時の範囲にに含まれます`
		trueParagraph.textContent = trueCentense
		ans.appendChild(trueParagraph)
	}

	// any type of condition
	// end equal start
	if ( start == end ) {
		const trueParagraph:HTMLParagraphElement = <HTMLParagraphElement>document.createElement('p')
		const trueCentense = `入力された時刻${target}時は指定した範囲${start}時~${end}時の範囲を24時間とみなすので範囲内に含まれます`
		trueParagraph.textContent = trueCentense
		ans.appendChild(trueParagraph)	
	}

	// cross over a day
	if (end < start) {
		const fixEndTime:number = end + 12
		const fixStartTime:number = start - 12

		if (fixStartTime <= target && target < fixEndTime ) {
			const trueParagraph:HTMLParagraphElement = <HTMLParagraphElement>document.createElement('p')
			const trueCentense = `入力された時刻${target}時は指定した範囲${start}時~${end}時の範囲を日付をまたいだと見なすので範囲内に含まれます`
			trueParagraph.textContent = trueCentense
			ans.appendChild(trueParagraph)	
		}
	}
}

const reset = () => {
	const form:HTMLFormElement = <HTMLFormElement>document.getElementById('inputForm')
	form.reset()
}

// const outPut = (target) => {
// 	const setStatus = document.createElement("p")
// 	setStatus.innerHTML("比較対象の時間：",target)
// }