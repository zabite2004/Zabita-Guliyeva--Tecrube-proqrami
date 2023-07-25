var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    loop: true,
   
    navigation: {
        nextEl: ".swiperButtonNext",
        prevEl: ".swiperButtonPrev",
    },
});




const watchBtn = document.querySelector(".watchlist")
const watchList = document.querySelector(".dropdownWhatch")
const cancelWatch = document.querySelector(".cancel-watch")

watchBtn.addEventListener("click", () => {
    let a = false
    if (a === false) {
        watchList.classList.add("active")
        a = true
        if (a === true) {
            cancelWatch.addEventListener("click", () => {
                watchList.classList.remove("active")
                a = false
            })
        }
    }
})


const form=document.querySelector(".formSection")
const signIn=document.querySelector(".sign-in")
const cancelForm=document.querySelector(".cancel")

signIn.addEventListener("click",()=>{
   let showForm=false
   if(showForm===false){
    form.classList.add("active")
    showForm=true
    if(showForm===true){
        cancelForm.addEventListener("click",()=>{
            console.log(1221);
            form.classList.remove("active")
            console.log("asasas");
            showForm=false
        })
    }
   } 
})

