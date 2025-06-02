//ナビゲーションバー

export const Header: React.FC = () => {
  return (
    <header className="py-6">
      <div className="container mx-auto flex justify-between items-center px-8 md:px-14">
        <div className="text-3xl font-bold"> Gen.com </div>
        <div className="space-x-12">
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
