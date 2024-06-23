let man=()=>{
    let typing_animation1 =document.getElementById("A1")
    let typing_animation2 =document.getElementById("A2")
   let text_images= document.getElementById("text_images")
   let text_images2= document.getElementById("text_images2")
    typing_animation2.style.display="none"

    setTimeout(()=>{
        typing_animation2.style.display="block"

    },3000)

    
    setTimeout(()=>{
        text_images.style.display="block"

    },6000)

    setTimeout(()=>{
        typing_animation1.style.display="none"
        typing_animation2.style.display="none"
        text_images.style.display="none"

    },9500)


    setTimeout(()=>{
typing_animation1.innerHTML= "Then this website help you in remembering your important "
typing_animation1.style.display="block"
    },11000)

    setTimeout(()=>{
typing_animation2.innerHTML= "Schedule of the current date as will as expired date!!"
        typing_animation2.style.display="block"

    },16000)

    setTimeout(()=>{
        text_images.style.display="block"
        text_images.style.backgroundImage="url( ./images/question-answer-scene-2-people-260nw-1394371715.webp)"
            },18000)
     setTimeout(()=>{
                text_images2.style.display="block"
                    },19500)

    

}
man()