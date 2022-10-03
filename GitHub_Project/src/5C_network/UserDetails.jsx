import { Link } from "react-router-dom";
import "./MainPage.css";

function UserDetails({ data }) {
  return (
    <div className="user-detail">
      <div>
        <div className="user-image">
          <img width="130px" src={data.avatar_url} />
        </div>

        <div style={{ marginTop: "10px" }}>
          <h2>{data.name}</h2>
        </div>
      </div>
      <div>
        <div style={{ width: "500px" }}>{data.bio}</div>
        <div>
          <b>{data.company}</b>
        </div>
        <br />
        <Link to={`/followers/${data.login}`}>
          <button> {data.followers} Followers</button>
        </Link>
      </div>
    </div>
  );
}

export default UserDetails;
