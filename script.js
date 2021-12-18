// const output= [ 2, 5, 4, 1, 9, 12, 11, 10, 8, 7, 6, 3]
// let randomOrder =[]

// function random(){
//     randomNumber = output[Math.floor(Math.random() * output.length)]
//  console.log(randomNumber)
//  for (let i = 0; i < output.length; i++) {
//      if (randomOrder ===! randomNumber ){
//     return true} 
//     randomOrder.push(randomNumber)
//  }

// console.log(randomOrder)
// }
// random()
const btn = document.getElementById("btn")
btn.addEventListener('click', getActivity)
let activity = document.getElementById("activity")

const url = "https://www.boredapi.com/api/activity"
function getActivity(){
fetch(url)
.then((res)=>
{
    return res.json()
})
.then((data) => {
    console.log(data)
    activity.innerHTML= data.activity
}
)}
// getActivity()
