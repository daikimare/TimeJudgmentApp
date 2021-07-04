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
	const elementTarget:HTMLInputElement = <HTMLInputElement>document.getElementById('target')
	const elementStart:HTMLInputElement = <HTMLInputElement>document.getElementById('start')
	const elementEnd:HTMLInputElement = <HTMLInputElement>document.getElementById('end')
	const target:number = Number(elementTarget.value)
	const start:number = Number(elementStart.value)
	const end:number = Number(elementEnd.value)

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
	const form:HTMLFormElement = <HTMLFormElement>document.getElementById('inputForm')
	form.reset()
}