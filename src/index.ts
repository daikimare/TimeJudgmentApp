// DOM
const judge:any = document.getElementById('judge')
const ans = document.getElementById('ans')

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
	console.log("start",start)
	console.log("end",end)
}
