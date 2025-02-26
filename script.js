var container = document.getElementsByClassName("container")[0];
function AddCard(){
    var content_list= [];
    var content_list_key = ["Title" , "Cnam", "Views" ,"monthsAgo" , "Duration", "img_url"];
    for(let i=0 ; i<6 ; i++){
        content_list[i] = prompt(`Enter ${content_list_key[i]}`);
     }

    content_list[3] = content_list[3] + " month ago";
    if(content_list[2]>=1000 && content_list[2]<1000000){
        content_list[2] = content_list[2]/1000;
        content_list[2] += "K";
    }
    else if(content_list[2]>1000000  && content_list[2]<100000000){
        content_list[2] /= 1000000;
        content_list[2] += "M";
    } 
    else if(content_list[2]>100000000){
        content_list[2] /= 100000000;
        content_list[2] += "B"; 
    }
    

   let card_div = document.createElement("div");
   card_div.classList.add("Card");
   

   let img_container = document.createElement("div");
   img_container.classList.add("imgContainer");

   
   let img = document.createElement("img");
   img.src = content_list[5];
   img.setAttribute("height" , "180px");
   
   let time_stamp = document.createElement("div");
   time_stamp.setAttribute("id" , "timeStamp");
   time_stamp.innerHTML = content_list[4];
   
   let content_container = document.createElement("div");
   content_container.className = "contentContainer";

   let Title = document.createElement("div");
   Title.className = "Title";
   Title.innerHTML = content_list[0];

   let otherData = document.createElement("div");
   otherData.className = "otherData";

   let ul = document.createElement("ul");
   
   for(let j=0;j<3;j++){
    let li = document.createElement("li");
    li.innerHTML = content_list[1+j];
    ul.appendChild(li);
   }



   img_container.appendChild(img);
   img_container.appendChild(time_stamp);
   card_div.appendChild(img_container);

   
   content_container.appendChild(Title);
   otherData.appendChild(ul);
   content_container.appendChild(otherData);
   card_div.appendChild(content_container);

   container.prepend(card_div);

}





























    // let card = container.firstElementChild;
    // card.classList.add("Card");}

//     let div_img_container = card.createElement("div");
//     card.appendChild(div_img_container);
//     card.lastElementChild.classList.add("imgContainer");

//     let img_container = document.getElementsByClassName("imgContainer")[0];
//     let img = card.createElement("img");
//     img_container.appendChild(img);
//     img_container.getElementByTagName("img").setAttribute("src" , content_list[5]);
//      let div_timestamp = img_container.createElement("div");
//     img_container.appendChild(div_timestamp);
//     img_container.getElementByTagName("div").setAttribute("id" , "timeStamp");
//     img_container.getElementByTagName("div").innerText = content_list[4];


//     card.appendChild(div_img_container);
//     card.lastElementChild.classList.add("contentContainer");
//     let content_container = document.getElementsByClassName("contentContainer")[0];
//     let div_Title = content_container.createElement("div");
//     content_container.appendChild(div_Title);
//     content_container.lastElementChild.classList.add("Title");
//     content_container.lastElementChild.innerText = content_list[0];

//     content_container.appendChild(div_Title);
//     content_container.lastElementChild.classList.add("otherData");
//     let ul = content_container.lastElementChild.createElement("ul");
//     content_container.lastElementChild.appendChild(ul);
//     let li = content_container.lastElementChild.getElementByTagName(ul).createElement("li");
//     for(let j=0 ;j<3;j++){
//         content_container.lastElementChild.getElementByTagName(ul).appendChild(li);
//         content_container.lastElementChild.getElementByTagName(ul).lastElementChild.innerText(content_list[j+1]);
//     }


// }