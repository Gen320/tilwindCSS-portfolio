//ナビゲーションバー

export const Header: React.FC = () => {
  return (
    <header className="py-6">
      <div className="container mx-auto flex justify-between items-center px-8 md:px-14">
        <div className="text-3xl font-bold"> Gen.com </div>
        <div className="space-x-12">
          <a href="/">ホーム</a>
          <a href="/">ポートフォリオ</a>
          <a href="/">お客様</a>
          <a href="/">
            <button>お問い合わせ</button>
          </a>
        </div>
      </div>
    </header>
  );
};
