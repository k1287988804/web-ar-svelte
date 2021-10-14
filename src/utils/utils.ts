const A = (ele:string) => document.querySelector(ele)

const Aw = (time:number = 0):any => new Promise((resolve:any) => setTimeout(() => resolve() ,time)) 

export { A, Aw }