window.addEventListener("contextmenu" , (m)=>{
    m.preventDefault()
    wheel.classList = "wheel"
    const x = m.x+"px"
    const y = m.y+"px"
    wheel.style.top = y
    wheel.style.left = x
    wheel.classList = "wheel on"
})
window.addEventListener("click" , ()=>{
    wheel.classList = "wheel"
})
const wheel = document.querySelector(".wheel")

document.querySelectorAll(".arc").forEach(( elem, i)=>{
    elem.addEventListener("mouseenter" , ()=>{
        wheel.setAttribute("data-chosen" , 1+i)
    })
    elem.addEventListener("mouseleave" , ()=>{
        wheel.setAttribute("data-chosen" , 0)
        9
    })
})
