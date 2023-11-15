const App = () => {
  return (
    <div className="bg-red-100 min-h-screen max-w-screen-md mx-auto flex">
      <div className="bg-black w-52">Side </div>
      <div className="bg-green-100 grow flex flex-col">
        <div className="bg-gray-100 grow">Main </div>
        <div className="bg-gray-300 h-24">Chat Bar</div>
      </div>
    </div>
  );
};

export default App;
