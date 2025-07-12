import {useState} from "react";
export default function Lodu(){
    let [move,setMove]=useState({Blue:0,Yellow:0,Green:0,Red:0});
    let [arr ,setArr]=useState(["no moves"])
    let updateBlue=()=>{
        // console.log(`move blue${move.Blue}`)
        // setMove((preMove)=>{
        //  return {...preMove, Blue: preMove.Blue +1};
        // });
        
        setArr([...arr,"blue moves"]);
        console.log(arr);
    };
        let updateYellow=()=>{
        console.log(`move blue${move.Yellow}`)
        setMove((preMove)=>{
         return {...preMove,Yellow: preMove.Yellow +1};
        });
    }; 
        let updateGreen=()=>{
        console.log(`move blue${move.Green}`)
        setMove((preMove)=>{
         return {...preMove, Green: preMove.Green +1};
        });
    };
           let updateRed=()=>{
        console.log(`move blue${move.Red}`)
        setMove((preMove)=>{
         return {...preMove, Red: preMove.Red +1};
        }); 
    };
    return (
        <div>
            <p>Game Begins!</p>
            <div>
                <p>arr={arr}</p>
                <p>Blue moves={move.Blue} </p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves={move.Yellow}</p>
                <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateYellow}>+1</button>
                <p>Green moves= {move.Green} </p>
                <button style={{backgroundColor:"Green"}} onClick={updateGreen}>+1</button>
                <p>Red moves= {move.Red} </p>
                <button style={{backgroundColor:"Red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}