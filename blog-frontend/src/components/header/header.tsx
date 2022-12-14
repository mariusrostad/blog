import "./Header.css";
import SearchIcon from "../../assets/search.svg";

function Header() {
  return (
    <div className="custom-header">
      <div>
        <a href={"/"} className="heading-top-button">
          Button #1
        </a>
        <a href={"/"} className="heading-top-button">
          Button #2
        </a>
        <a href={"/"} className="heading-top-button">
          Button #3
        </a>
      </div>
      <h1 className="text-4xl">Blog</h1>
      <div style={{ alignItems: "center", display: "flex" }}>
        <input style={{ borderBottom: "1px solid black" }} />
        <button style={{ height: "100%" }}>
          <span>
            <img src={SearchIcon} className="search-icon" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Header;
