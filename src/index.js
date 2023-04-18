import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });
// 

// Kodlar buraya gelecek!

document.addEventListener("wheel", (e) => {
    document.querySelector("h1").style.backgroundColor = "yellow";
    document.querySelector("h1").style.padding = "5px";
})
// 
function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.001;

    // Restrict scale
    scale = Math.min(Math.max(0.5, scale), 1.5);

    // Apply scale transform
    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelectorAll("img")[2];
el.onwheel = zoom;
el.addEventListener("wheel", zoom);


document.addEventListener("click", (e) => {
    if (e.target.textContent === "Guzel hareket!" || e.target.textContent === "Yanlis yere tikladin. Bana tikla!" || e.target.textContent === "Eğlence Otobüsüne Hoş geldiniz!") {
        e.preventDefault();
        document.querySelector("header h2").textContent = "Guzel hareket!"
        if(!document.querySelector(".imaj")){
            let abs = document.createElement("img");
            abs.className = "imaj";
            document.querySelector(".nav-container").prepend(abs);
            let imaj = document.querySelector(".imaj");
            imaj.setAttribute("style", "justify-content: center")
            imaj.style.display = "flex";
            imaj.style.height = "80px"
            imaj.src = "http://localhost:9000/img/fun-bus.jpg"
        }
    } else {
        if(document.querySelector(".imaj")){
            document.querySelector(".imaj").remove();
        }
        e.preventDefault();
        document.querySelector("header h2").textContent = "Yanlis yere tikladin. Bana tikla!"
        console.log("click event is fired")
    }
})


document.querySelectorAll(".btn")[0].addEventListener("mouseover", (e) => {
    document.querySelectorAll(".btn")[1].style.color = "purple";
    document.querySelectorAll(".btn")[0].style.color = "black";
    document.querySelectorAll(".btn")[2].style.color = "yellow";
})

document.querySelector(".content-destination img").addEventListener("mouseover", (e)=>{
    document.querySelector(".content-destination img").style.transform = `scale(1.5)`
})

document.querySelector(".content-destination img").addEventListener("mouseout", (e)=>{
    document.querySelector(".content-destination img").style.transform = `scale(1)`
})