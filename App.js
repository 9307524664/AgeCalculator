// import './App.css'
// import First from './First'
// import LifeCycle  from'./LifeCycle';
//  import  state from './state.js';
//  import Props from '/props.js';
// import React, { useEffect,useState } from "react";
import Profile from "./Profile";
import StateEx from'./StateEx';
// import Update from "./Updating";
import UnMount from './Umounting';
import Props from "./Props";
import  UpdatePp from"./PropsUpadting";
import UseEffect from "./UseEffect";
import List from "./List";
import './App.css';
import AgeCalculator from "./components/AgeCalculator";


// function App(){

  // return <div className="abc">

  //     {/* <h1>Hello React</h1>
  //   <p> Its is Paragarph</p>
  //   <h2>it is React js Project</h2>
  //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus qui excepturi maiores aliquam quidem, accusantium sequi exercitationem ullam rem tempora, reiciendis praesentium aspernatur! Aliquid itaque magnam necessitatibus repellat vitae! Corporis?</p>
  //   <marquee>React js Develper</marquee>
  //   <h3> Hello Ram </h3>
  //   <h4>it is My React App</h4>
  //   <button>it is Button</button>   */}
  //   {/* <First /> */}





  //   <Class/>
  // </div>






  // return<div>
  //   {
  //     <Props name={'bapu'}age={20}email={'bapu@123'}/>
  //     // <Props name={'Ram'}age={23}email={'ram@134'}/>

  //   }
  //   <LifeCycle/>
  // </div>


//  return(
//   <div>
//    {/* <h1> Props in  React js </h1> */}
//   <Profile text={{name:'Ram',age:23}}    data="Profile Data"  result="Its is Props"/>


//   </div>
//  )


//state Example

//  return (
//   <div>
// {/* <StateEx/> */}
{/* <Update/> */}
{/* <UnMount/> */}
 
   

   {/* <Props name='Bapu' text="Hello I am React js Develpoer"  data=' i am currently prusisng in Final year B.Tech' />
   < UpdatePp name="Bapu" age={45} data='it is React js Deveploer'/>
  </div> */}
// );



// const[data,setData]=useState(10);
// const[count,setcount]=useState(100);

// useEffect(()=>{
//   console.log("Data Called")
// },[data])


// useEffect(()=>{
//   alert(" Count"+ count)
// },[count])

// return(
// <div className="App">
//   <h1>Count:{count}</h1>
//   <h1>Data:{data}</h1>

//   <button onClick={()=>setcount(count+1)}>UpadteCount</button>
//   <button onClick={()=>setData(data+1)}>UpadteCount</button>

//   <UseEffect/>



// )
  

//   }


function App()
{
  return(
         <div>
          {/* <List/> */}
          {/* <h1>Age  Calculator</h1> */}
          <AgeCalculator/>
         </div>
  )
}



export default App;
