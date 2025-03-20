import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;

// // import { useCookies } from "react-cookie";
// // import Dashboard from "./Dashboard";
// // import TopBar from "./TopBar";

// // const Home = () => {
// //   const [cookies, removeCookie] = useCookies([]);

 

// //   return (
// //     <>
// //       <TopBar />
 
// //       <Dashboard />
// //     </>
// //   );
// // };

// // export default Home;

// import { useEffect, useState } from "react";
// import { useCookies } from "react-cookie";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Dashboard from "./Dashboard";
// import TopBar from "./TopBar";

// const Home = () => {
//   const [cookies, removeCookie] = useCookies(["token"]);
//   const [username, setUsername] = useState("");

//   // useEffect(() => {
//   //   const verifyUser = async () => {
//   //     if (!cookies.token) {
//   //       window.location.href = "http://localhost:3001/login";
//   //       return;
//   //     }

//   //     try {
//   //       const { data } = await axios.post(
//   //         `${process.env.REACT_APP_BASE_URL}/login",
//   //         {},
//   //         { withCredentials: true }
//   //       );
//   //         console.log(data.user)
//   //       if (data.status) {
//   //         setUsername(data.user);
//   //         toast.success(`Hi ${data.user}!`, { position: "top-right" });
//   //       } else {
//   //         removeCookie("token");
//   //         window.location.href = "http://localhost:3001/login";
//   //       }
//   //     } catch (error) {
//   //       console.error("Error verifying user:", error);
//   //       removeCookie("token");
//   //       window.location.href = "http://localhost:3001/login";
//   //     }
//   //   };

//   //   verifyUser();
//   // }, [cookies, removeCookie]);
//   useEffect(() => {
//     const verifyUser = async () => {
//       // if (!cookies.token) {
//       //   console.warn("No token found. Redirecting to login...");
//       //   if (window.location.pathname !== "/login") {
//       //     window.location.href = "http://localhost:3001/login";
//       //   }
//       //   return;
//       // }
  
//       console.log("Token found:", cookies.token);
  
//       try {
//         const { data } = await axios.post(
//           `${process.env.REACT_APP_BASE_URL}/login",
//           {},
//           { 
//             headers: { Authorization: `Bearer ${cookies.token}` }, 
//             withCredentials: true 
//           }
//         );
  
//         console.log("API Response:", data);
  
//         if (data.status && data.user) {
//           console.log("User verified:", data.user);
//           setUsername(data.user);
//           toast.success(`Hi ${data.user}!`, { position: "top-right" });
//         } else {
//           console.warn("Invalid token. Removing and redirecting...");
//           removeCookie("token");
//           // if (window.location.pathname !== "/login") {
//           //   window.location.href = "http://localhost:3001/login";
//           // }
//         }
//       } catch (error) {
//         console.error("Error verifying user:", error.response?.data || error.message);               
//         removeCookie("token");
//         // if (window.location.pathname !== "/login") {
//         //   window.location.href = "http://localhost:3001/login";
//         // }
//       }
//     };
  
//     verifyUser();
//   }, [cookies, removeCookie]);
  
  
//   const Logout = () => {
//     removeCookie("token");
//     window.location.href = "http://localhost:3001/";
//   };

//   return (
//     <>
//       <TopBar />
//       <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}>
//         <div style={{ display: "inline-block" }}>
//           <button 
//             onClick={Logout} 
//             style={{
//               backgroundColor: "#ff4d4d",
//               color: "#fff",
//               border: "none",
//               padding: "8px 16px",
//               fontSize: "14px",
//               borderRadius: "6px",
//               cursor: "pointer",
//               transition: "0.3s",
//               boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
//               width: "auto",
//               minWidth: "100px",
//             }}
//             onMouseOver={(e) => e.target.style.backgroundColor = "#e60000"}
//             onMouseOut={(e) => e.target.style.backgroundColor = "#ff4d4d"}
//           >
//             🔒 Logout
//           </button>
//         </div>
//       </div>
//       <Dashboard />
//       <ToastContainer />
//     </>
//   );
// };

// export default Home;
