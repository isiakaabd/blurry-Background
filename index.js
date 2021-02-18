const text = document.querySelector(".text-loading") 
const bg = document.querySelector(".bg")

let load = 0

const textFunction = () => {
load ++
if (load> 99){
    clearInterval(int)
}

text.innerText = `${load}%`
text.style.opacity =scale(load,0,100,1,0)
bg.style.filter =`blur(${scale(load,0,100,10,0)}px)`
}

// using setInterval to call the textFunction
let int = setInterval(textFunction,60)

// for scale
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
