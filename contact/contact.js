function signUp() {
    window.location.href = "/loginandSignup/signup.html"
}



// //SCROLL ACTION
// let head = document.querySelector("header")
// let webLogo = document.querySelector(".weblogo")
// window.addEventListener("scroll",()=>{

//     let allBlack = document.querySelectorAll(".change")
//     let signButton = document.querySelector(".signup")
//     if (window.scrollY > 100) {
//         head.removeAttribute("style")
//         webLogo.setAttribute("src","/homepage/images/imagelogo.png")
//         head.classList.add("floatAnim")
//         allBlack.forEach((param)=>{
//             param.setAttribute("style","color: black;")
//         })
//         signButton.setAttribute("style","background-color: rgb(28, 25, 77); color: white;")
//     } else {
//         webLogo.setAttribute("src","/homepage/images/white logo.png")
//         head.setAttribute("style","background: linear-gradient(135deg, #010c27 0%, #021038 55%, #02133d 100%);")
//         head.classList.remove("floatAnim")
//         allBlack.forEach((param)=>{
//             param.setAttribute("style","color: white;")
//         })
//         signButton.removeAttribute("style")
//     }
// })