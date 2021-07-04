// DOM
const judge:any = document.getElementById('judge')
const ans:string = String(document.getElementById('ans'))

const main = () => {
	console.log("app start!")
	console.log("Get DOM")
	console.log(judge)
	console.log(ans)
}
main()

judge.onclick = () => {
	let elementTarget:HTMLInputElement = <HTMLInputElement>document.getElementById('target')
	let elementStart:HTMLInputElement = <HTMLInputElement>document.getElementById('start')
	let elementEnd:HTMLInputElement = <HTMLInputElement>document.getElementById('end')
	let target:number = Number(elementTarget.value)
	let start:number = Number(elementStart.value)
	let end:number = Number(elementEnd.value)

	console.log("target:",target)
	console.log("start:",start)
	console.log("end:",end)

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

}

const reset = () => {
	let form:HTMLFormElement = <HTMLFormElement>document.getElementById('inputForm')
	form.reset()
}