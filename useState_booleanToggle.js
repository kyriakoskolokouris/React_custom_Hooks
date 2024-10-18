import React, { useState } from 'react';

 function App() {
   const [status, setStatus] = useState(true);
   
    return (
      <div>
      <h1>
      The restaurant is currently {""}
      {status ? "open" : "closed" }.
   </h1>
       <button onClick={() => setStatus(!status)}>
{status ? "Close" : "Open"} 
         Restaurant
          </button>
          </div>
           );
}



// function App() {
//   const [status, setStatus] = useState("Open");

//     return (
//       <div> <h1> The restaurant is currently {status}. </h1>
//        <button onClick={() => setStatus("Open")}>
//         Open Restaurant
//           </button>
//       <button onClick={() => setStatus("Closed")}>
//         Close Restaurant
//           </button>
//           </div>
// );
// }
      
