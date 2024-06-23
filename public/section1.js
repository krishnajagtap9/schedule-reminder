// let time=()=>{
  
 
//                     timelimite()


  
// } 
// let butn = document.getElementById("butn")
// butn.addEventListener("click",()=>{
   
//     time()
// })





// let  timelimite=()=>{
//     let now = new Date()
    
//         let year = now.getFullYear()
//         let date = now.getDate()
//         let months =now.getMonth()+1

//         let formate= `${"Date="+date+"/"+months + "/"+year }`
//         // console.log(formate)
//         if(date===15){
//             let timediv= document.getElementById("time")
//             timediv.innerHTML= "hello its hero time !"
//            timediv.appendChild(butn)
//             // console.log("hello world")
//         }
//        else if(date!=15){
//             let timediv= document.getElementById("time")
//             timediv.innerHTML= "oooh noo lets back to the work !"
//            timediv.appendChild(butn)
            
//             // console.log("hello world")
//         }

//        }


// let array = {


    // 3: ["Complete project report"],
    //     6: ["Attend team meeting"],
    //     9: ["Update client records"],
    //     12: ["Prepare presentation"],
    //     15: ["Review budget proposal"],
    //     18: ["Schedule performance reviews"],
    //     21: ["Organize team-building event"],
    //     24: ["Handle customer inquiries"],
    //     27: ["Update website content"],
    //     30: ["Conduct market research"],
// };



 let man = async()=>{
      

    let promise =  await fetch(".//employe_task.json")
    let data = await promise.json() 
    console.log (data)

 let dataset= data.Sheet1[0]
 let dataset2 = data.Sheet1[1]
//  let dataset2 = data.Sheet1[1]
//  console.log(dataset2[])


let entries = Object.entries(dataset)

entries.sort((a,b)=> a[0]-b[0])
console.log (entries)

// console.log(entries[2][1]) 
let current_table= document.getElementById("current_table")
let date_miss_box = document.getElementById("date_miss")
let butn= document.getElementById("butn")
// let generate_div1 = document.getElementById("generate_div1")
let generate_div2 = document.getElementById("generate_div2")

butn.addEventListener("click",()=>{

    
let now = new Date()

let year= now.getFullYear()
let months= now.getMonth()
let date = now.getDate()

console.log(year)
console.log(months)
console.log(date)
let dateconvert=date.toString();
   

// mere phele galti ye ho rahi thi ki mai direct string to integer se convert karwa raha tha 
// let arr = entries.filter(entry =>entry[0] >= dateconvert);


let arr = entries.filter(entry => parseInt(entry[0]) < parseInt(dateconvert));
let arr2 = entries.filter(entry => parseInt(entry[0]) >= parseInt(dateconvert));
//    ye method jo hai mene chatgpt se pucha hai ki kaise karte hai
   
// let second1_arr=  Object.keys(dataset2).filter(key=>parseInt(key) < parseInt(dateconvert))
//     const values1 = second1_arr.map(key => dataset2[key]);
// console.log(values1)

let second2_arr=  Object.keys(dataset2).filter(key=>parseInt(key) >= parseInt(dateconvert))
    const values2 = second2_arr.map(key => dataset2[key]);
console.log(values2)
// console.log(arr)
console.log(arr2)
let loader = document.querySelector(".loader")
let load = document.querySelector(".load")
let current_date= document.getElementById("date_show_in_both_section")

loader.className="loader_after"

  setTimeout(()=>{
  current_table.style.display="block"
//   date_miss_box.style.display="block"
    if(arr && arr2){

        // loop 1 for arr1
     console.log("its busy day ...  i have a task for you ")
    
     for(let i= 0  ; i<arr.length ;i++){
        let generate_div1 =document.createElement("div")
        let p1 =document.createElement("p")
        let content1 = document.createElement("div")
        // let date_display = document.createElement("p")
    
        p1.className="key"
        content1.className="content_after"
    // date_display.className="date_display"
        generate_div1.className ="generate_div1"
    
    generate_div1.appendChild(p1)
    // generate_div1.appendChild(date_display)
        generate_div1.appendChild(content1)


            p1.innerHTML=i
        // for(let j=2 ; j<=dataset2.length ; j++){
            
        // }
        content1.innerHTML=arr[i][1] 
        // date_display.innerHTML=dataset2[1]
        date_miss_box.appendChild(generate_div1)
    
      
    
    
        
    }
    
    // loop 2 for arr2
     for(let i= 0 ; i<arr2.length ;i++){
        let generate_div2 =document.createElement("div")
        let p2 =document.createElement("p")
        let content2 = document.createElement("div")
        let date_display2 = document.createElement("p")
    
        p2.className="key"
        content2.className="content"
  date_display2.className="date_display"
    generate_div2.className ="generate_div2"

        generate_div2.appendChild(p2)
        generate_div2.appendChild(content2)
        generate_div2.appendChild(date_display2)
    
    
        p2.innerHTML=i
        content2.innerHTML=arr2[i][1] 
        current_date.innerHTML=date+"/"+months+"/"+year
          date_display2.innerHTML=values2[i]
    
      
        current_table.appendChild(generate_div2)
    
    
     }
    
       }
    
    
  },2000)
  
    
        

       
    

  
})

 }


 man()