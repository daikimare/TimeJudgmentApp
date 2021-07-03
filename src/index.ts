// DOM
const end = document.getElementById('end')
const judge:any = document.getElementById('judge')
const ans = document.getElementById('ans')

const main = () => {
	console.log("app start!")
	console.log("Get DOM")
	// console.log(target)
	// console.log(start)
	console.log(end)
	console.log(judge)
	console.log(ans)
}
main()

judge.onclick = function createDOM() {
	const elementTarget: HTMLInputElement =<HTMLInputElement>document.getElementById('target')
	const elementStart: HTMLInputElement =<HTMLInputElement>document.getElementById('start')
	const target:number = Number(elementTarget.value)
	const start:number = Number(elementStart.value)

	console.log(target)
	console.log(start)
}
