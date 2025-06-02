//ナビゲーションバー

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const Header: React.FC = () => {
  const [isHidden, setIshidden] = useState(false);

  const handleHidden = () => {
    setIshidden((prev) => !prev);
  };
  return (
    <header className="py-6">
      <div className="container mx-auto flex justify-between items-center px-8 md:px-14">
        <div className="text-3xl font-bold"> Gen.com </div>
        <button className="md:hidden" onClick={handleHidden}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div
          className={`space-x-12 ${
            isHidden && "hidden"
          } md:flex md:flex-col md:items-right`}
        >
          <a
            href="/"
            className="hover:text-selected-text transition-all duration-300"
          >
            ホーム
          </a>
          <a
            href="/"
            className="hover:text-selected-text transition-all duration-300"
          >
            ポートフォリオ
          </a>
          <a
            href="/"
            className="hover:text-selected-text transition-all duration-300"
          >
            お客様
          </a>
          <a href="/">
            <button className="px-6 py-2 bg-theme font-bold rounded-lg hover:bg-blue-600 transition-all duration-300">
              お問い合わせ
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};
