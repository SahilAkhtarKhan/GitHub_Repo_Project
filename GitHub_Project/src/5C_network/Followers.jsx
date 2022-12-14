import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { callAPI } from "./API";

function Followers() {
  const { userName } = useParams();
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const userDetails = await callAPI(
        `https://api.github.com/users/${userName}/followers`
      );

      setList(userDetails || []);
    })();
  }, []);

  return (
    <>
      <h3>List of Followers</h3>
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6px",
        }}
      >
        {list.map((item, index) => {
          return (
            <Link
              to={`/?q=${item.login}`}
              key={index}
              style={{ color: "black", textDecoration: "none" }}
            >
              <div
                style={{
                  margin: "10px",
                  backgroundColor: "rgb(255 217 217)",
                  borderRadius: "6px",
                  padding: "14px",
                  display: "flex",
                  gap: "14px",
                }}
              >
                <div>
                  <img width="90px" src={item.avatar_url} alt="image" />
                </div>
                <div>
                  <h6>{item.login}</h6>
                  <br />
                  <p style={{ color: "blue", textDecoration: "underline" }}>
                    {item.url}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Link to={`/?q=${userName}`}>
        <button>Go Back to Home</button>
      </Link>
    </>
  );
}

export default Followers;
