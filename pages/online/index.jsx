import { Link } from "@material-ui/core";
import React from "react";

const Online = () => {
  return (
    <div className="menu-pt">
      <header className="header-pt">
        <nav className="site-nav">
          <ul>
            <li>
              <Link href="/online/getAllOnline">Danh sách khóa học online</Link>
            </li>
            <li>
              <Link href="/online/createOnline">Tạo khóa học online</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Online;
