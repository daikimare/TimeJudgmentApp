/*
	モバイルファクトリーエントリーシート
	福島大稀 
*/

/* DOM　*/
const judge:HTMLButtonElement = <HTMLButtonElement>document.getElementById('judge')
const ans:any = document.getElementById('ans')

// 
const main = () => {
	console.log("app start!")
	console.log("Get DOM")
	console.log(judge)
	console.log(ans)
}
main()

/* judgment function */
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

		return
	}
	if(start<0 || 24<start){
		reset()
		alert("判定範囲のスタート時刻は0以上24以下の数値で入力してください")

		return
	}
	if(end<0 || 24<end){
		reset()
		alert("判定範囲の終了時刻は0以上24以下の数値で入力してください")

		return
	}

	/* lenge check　*/
	if (start <= target && target < end) {
		const trueParagraph:HTMLParagraphElement = <HTMLParagraphElement>document.createElement('p')
		const trueCentense = `入力された時刻${target}時は指定した範囲${start}時~${end}時の範囲にに含まれます`
		trueParagraph.textContent = trueCentense
		ans.appendChild(trueParagraph)
	} /*else {
		const falsePragraph:HTMLParagraphElement = <HTMLParagraphElement>document.createElement('p')
		const falseCentense = `入力された時刻${target}時は指定した範囲${start}時~${end}時の範囲にに含まれていません`
		falsePragraph.textContent = falseCentense
		ans.appendChild(falsePragraph)
	}*/
	

	// any type of condition
	// end equal start
	if ( start == end ) {
		const trueParagraph:HTMLParagraphElement = <HTMLParagraphElement>document.createElement('p')
		const trueCentense = `入力された時刻${target}時は指定した範囲${start}時~${end}時の範囲を24時間とみなすので範囲内に含まれます`
		trueParagraph.textContent = trueCentense
		ans.appendChild(trueParagraph)
	}

	// cross over a day
	if (end<start){
		if (start <= target){
			const trueParagraph:HTMLParagraphElement = <HTMLParagraphElement>document.createElement('p')
			const trueCentense = `入力された時刻${target}時は指定した範囲${start}時~翌日${end}時の範囲内に含まれます`
			trueParagraph.textContent = trueCentense
			ans.appendChild(trueParagraph)	
		} else if (target < end && target < start) {
			const trueParagraph:HTMLParagraphElement = <HTMLParagraphElement>document.createElement('p')
			const trueCentense = `入力された時刻${target}時は指定した範囲${start}時~翌日${end}時の範囲内に含まれます`
			trueParagraph.textContent = trueCentense
			ans.appendChild(trueParagraph)
		} else {
			const trueParagraph:HTMLParagraphElement = <HTMLParagraphElement>document.createElement('p')
			const trueCentense = `入力された時刻${target}時は指定した範囲${start}時~翌日${end}時の範囲外なので範囲内に含まれません`
			trueParagraph.textContent = trueCentense
			ans.appendChild(trueParagraph)
		}
	}

	if ( target < start && (end < target || start < end )) {
		const falsePragraph:HTMLParagraphElement = <HTMLParagraphElement>document.createElement('p')
		const falseCentense = `入力された時刻${target}時は指定した範囲${start}時~翌日${end}時の範囲にに含まれていません`
		falsePragraph.textContent = falseCentense
		ans.appendChild(falsePragraph)
	} 

	reset()
}

const reset = () => {
	const form:HTMLFormElement = <HTMLFormElement>document.getElementById('inputForm')
	form.reset()
}

const restart = () => {
	const restartButton: HTMLButtonElement = <HTMLButtonElement>document.createElement('button')
	restartButton.textContent = "restart"
	restartButton.onclick = () => {
		location.reload()
	}
	ans.appendChild(restartButton)
}
restart()