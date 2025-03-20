// import React, { useState } from "react";

// import { Link } from "react-router-dom";

// const Menu = () => {
//   const [selectedMenu, setSelectedMenu] = useState(0);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

//   const handleMenuClick = (index) => {
//     setSelectedMenu(index);
//   };

//   const handleProfileClick = (index) => {
//     setIsProfileDropdownOpen(!isProfileDropdownOpen);
//   };

//   const menuClass = "menu";
//   const activeMenuClass = "menu selected";

//   return (
//     <div className="menu-container">
//       <img src="logo.png" style={{ width: "50px" }} />
//       <div className="menus">
//         <ul>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/"
//               onClick={() => handleMenuClick(0)}
//             >
//               <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
//                 Dashboard
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/orders"
//               onClick={() => handleMenuClick(1)}
//             >
//               <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
//                 Orders
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/holdings"
//               onClick={() => handleMenuClick(2)}
//             >
//               <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
//                 Holdings
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/positions"
//               onClick={() => handleMenuClick(3)}
//             >
//               <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
//                 Positions
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/funds"
//               onClick={() => handleMenuClick(4)}
//             >
//               <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
//                 Funds
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/apps"
//               onClick={() => handleMenuClick(6)}
//             >
//               <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
//                 Apps
//               </p>
//             </Link>
//           </li>
//         </ul>
//         <hr />
//         <div className="profile" onClick={handleProfileClick}>
//           <div className="avatar">ZU</div>
//           <p className="username">USERID</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles
import { ToastContainer } from "react-toastify"; // Import ToastContainer

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  const removeCookies = (name) => {
    // Set the cookie with the same parameters, but with an expiration date in the past
    console.log("loggin out");
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  };

  const handleLogout = async () => {
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/logout`, {}, {withCredentials: true});
    if (!res.data.success) {
      toast.error("Could not log out. Please try again later.");
    } else {
      window.location.href = `${process.env.REACT_APP_FRONTEND_URL}`;
      toast.success("Logged out successfully");
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

//   return (
//     <div className="menu-container">
//       <img src="logo.png" style={{ width: "50px" }} alt="Logo" />
//       <div className="menus">
//         <ul>
//           <li>
//             <Link
//               to="/"
//               style={{ textDecoration: "none" }}
//               onClick={() => handleMenuClick(0)}
//             >
//               <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
//                 Dashboard
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/orders"
//               style={{ textDecoration: "none" }}
//               onClick={() => handleMenuClick(1)}
//             >
//               <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
//                 Orders
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/holdings"
//               style={{ textDecoration: "none" }}
//               onClick={() => handleMenuClick(2)}
//             >
//               <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
//                 Holdings
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/positions"
//               style={{ textDecoration: "none" }}
//               onClick={() => handleMenuClick(3)}
//             >
//               <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
//                 Positions
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/funds"
//               style={{ textDecoration: "none" }}
//               onClick={() => handleMenuClick(4)}
//             >
//               <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
//                 Funds
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/apps"
//               style={{ textDecoration: "none" }}
//               onClick={() => handleMenuClick(6)}
//             >
//               <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
//                 Apps
//               </p>
//             </Link>
//           </li>
//         </ul>
//         <hr />

//         {/* Profile Section */}
//         <div
//           className="profile"
//           onClick={toggleProfileDropdown}
//           style={{ position: "relative", cursor: "pointer" }}
//         >
//           <div className="avatar">ZU</div>
//           <p className="username">USERID</p>
//           {isProfileDropdownOpen && (
//             <div
//               className="dropdown-menu"
//               style={{
//                 position: "absolute",
//                 right: "0", // Ensure it aligns to the right
//                 top: "100%",
//                 backgroundColor: "#fff",
//                 boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//                 borderRadius: "5px",
//                 padding: "10px",
//                 minWidth: "150px",
//                 textAlign: "center", // Ensure text and button are centered
//                 zIndex: "1000" // Ensure dropdown appears above other elements
//               }}
//             >
//               <button
//                 onClick={handleLogout}
//                 style={{
//                   backgroundColor: "#ff4d4d",
//                   color: "#fff",
//                   border: "none",
//                   padding: "8px 16px",
//                   fontSize: "14px",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                   width: "100%", // Ensure the button is fully inside the dropdown
//                   textAlign: "center"
//                 }}
//               >
//                 🔒 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
return (
  <div className="menu-container">
    <ToastContainer position="bottom-right" autoClose={false} /> {/* Toast Container */}
    <img src="logo.png" style={{ width: "50px" }} alt="Logo" />
    <div className="menus">
      <ul>
        <li>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            onClick={() => handleMenuClick(0)}
          >
            <p className={selectedMenu === 0 ? "menu selected" : "menu"}>
              Dashboard
            </p>
          </Link>
        </li>
        <li>
          <Link
            to="/orders"
            style={{ textDecoration: "none" }}
            onClick={() => handleMenuClick(1)}
          >
            <p className={selectedMenu === 1 ? "menu selected" : "menu"}>
              Orders
            </p>
          </Link>
        </li>
        <li>
          <Link
            to="/holdings"
            style={{ textDecoration: "none" }}
            onClick={() => handleMenuClick(2)}
          >
            <p className={selectedMenu === 2 ? "menu selected" : "menu"}>
              Holdings
            </p>
          </Link>
        </li>
        <li>
          <Link
            to="/positions"
            style={{ textDecoration: "none" }}
            onClick={() => handleMenuClick(3)}
          >
            <p className={selectedMenu === 3 ? "menu selected" : "menu"}>
              Positions
            </p>
          </Link>
        </li>
        <li>
          <Link
            to="/funds"
            style={{ textDecoration: "none" }}
            onClick={() => handleMenuClick(4)}
          >
            <p className={selectedMenu === 4 ? "menu selected" : "menu"}>
              Funds
            </p>
          </Link>
        </li>
        <li>
          <Link
            to="/apps"
            style={{ textDecoration: "none" }}
            onClick={() => handleMenuClick(6)}
          >
            <p className={selectedMenu === 6 ? "menu selected" : "menu"}>
              Apps
            </p>
          </Link>
        </li>
      </ul>
      <hr />

      {/* Profile Section */}
      <div
        className="profile"
        onClick={toggleProfileDropdown}
        style={{ position: "relative", cursor: "pointer" }}
      >
        <div className="avatar">ZU</div>
        <p className="username">USERID</p>
        {isProfileDropdownOpen && (
          <div
            className="dropdown-menu"
            style={{
              position: "absolute",
              right: "0",
              top: "100%",
              backgroundColor: "#fff",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
              padding: "10px",
              minWidth: "150px",
              textAlign: "center",
              zIndex: "1000",
            }}
          >
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "#ff4d4d",
                color: "#fff",
                border: "none",
                padding: "8px 16px",
                fontSize: "14px",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
                textAlign: "center",
              }}
            >
              🔒 Logout
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
);
};

export default Menu;
