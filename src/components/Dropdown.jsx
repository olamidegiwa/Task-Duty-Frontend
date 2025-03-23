// import React, { useState } from "react";
// import { RiArrowDownSLine } from "react-icons/ri";

// const Dropdown = ({}) => {
//   const [toggleDropDown, setToggleDropDown] = useState(false);
//   const [arrowDown, setArrowDown] = useState(["urgent", "important"]);
//   const [selection, setSelection] = useState("select tags");

//   return (
//     <div className="position-relative mb-5">
//       <p className="tagggs p-0 fs-4 position-absolute mb-0">Tags</p>
//       <div
//         onClick={() => {
//           setToggleDropDown(!toggleDropDown);
//         }}
//       >
//         <div className="d-flex justify-content-between gap-3 border rounded">
//           <div className="d-flex gap-2 mx-5 mt-3">
//             <p className="px-1 py-1 rounded fs-6">{selection}</p>
//           </div>

//           <RiArrowDownSLine
//             style={{
//               transform: toggleDropDown ? "rotate(180deg)" : "rotate(0deg)",
//               transition: "0.4s ease-in-out",
//               cursor: "pointer",
//             }}
//             className="fs-1 mx-4 mt-2"
//           />
//         </div>
//       </div>
//       {toggleDropDown && (
//         <ul className="py-3 px-3  mt-4 w-100">
//           {arrowDown.map((lists) => {
//             return (
//               <li
//                 key={lists}
//                 onClick={() => {
//                   setSelection(lists === "Select tags" ? "Select tags" : lists);
//                   setToggleDropDown(false);
//                 }}
//               >
//                 {lists}
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Dropdown;
