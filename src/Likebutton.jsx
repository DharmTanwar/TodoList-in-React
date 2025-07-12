import { useState } from "react";

export default function Likebutton(){
    let [isLiked ,setIsLiked]=useState(false);
    let [clicks,setClicks]=useState(0);

     let togglelike = () => {
  setIsLiked(!isLiked);
   setClicks(clicks+1);
        };
        let likeStyle={
            color:"red",
        }
    return(
<div>
    <p>Click={clicks}</p>
<h1 onClick={togglelike}>
    {
     isLiked?<i className="fa-solid fa-heart" style={likeStyle}></i>: <i className="fa-regular fa-heart"></i>
    }
    </h1>
</div>
    )
}