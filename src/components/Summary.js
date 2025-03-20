import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// function getCookie(key) {
//   var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
//   return b ? b.pop() : "";
// }

const Summary = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/user-info`, { withCredentials: true });
        setUser(res.data);
      } catch (error) {
        toast.error("Could not load info");
        window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/login`;
      }
    })()
  }, [])

  return (
    <>
      <div className="username">
        <h6>Hi, {user?.email}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;