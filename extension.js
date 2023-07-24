// function btnclicked(){
//     console.log("button is clicked");
// }

let inputbtn=document.getElementById("input-btn")
let inputel=document.getElementById("input-el")
let mylead=[]
const ulel=document.getElementById("ul-el")
let deletebtn=document.getElementById("delete-btn")
let savebtn=document.getElementById("save-btn")
// let tabs=[]


let leadsfromlocalstorage=JSON.parse(localStorage.getItem("mylead"))

if(leadsfromlocalstorage){
    mylead=leadsfromlocalstorage
    render()
}

deletebtn.addEventListener("dblclick",function(){
    localStorage.clear()
    mylead=[]
    render()
})

savebtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
          mylead.push(tabs[0].url)
          localStorage.setItem("mylead",JSON.stringify(mylead))
          render()
    })
})

inputbtn.addEventListener("click",function(){
    mylead.push(inputel.value)
    
    inputel.value=""

    localStorage.setItem("mylead",JSON.stringify(mylead))

   render()
})

function render(){

    let list=""
    for(let i=0; i<mylead.length; i++){
        list+= `<li>
        <a target='_blank' href=' ${mylead[i]}' >${mylead[i]} </a>
        </li>`
    }
    // btnclicked()
    ulel.innerHTML=list
}

