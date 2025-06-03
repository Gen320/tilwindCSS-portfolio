export const HeroSection: React.FC = () => {
  return (
    <div className="container mt-16 flex justify-between items-center mx-auto px-8 md:px14 lg:px-24 w-full">
      <div className="flex flex-wrap md:flex-nowrap">
        <div>
          <h1>
            TailWindCSS
            <br />
            美しいサイトを
            <br />
            作ります
          </h1>
          <button className="px-6 py-2 bg-theme font-bold rounded-lg hover:bg-blue-600 transition-all duration-300">
            <span>もっと見る</span>
          </button>
        </div>
      </div>
    </div>
  );
};
