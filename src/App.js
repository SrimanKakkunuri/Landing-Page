
import imag from './assests/logo.svg'
import imag1 from './assests/illustration-mockups.svg'

function App() {
  return (
    <div className="App">
      <div className="bg-mobile lg:bg-desktop bg-violet-800 bg-cover bg-center h-full">
        <header className="p-8 ">
          <img className="w-40" src={imag} alt="" />
        </header>
        <div className="flex flex-wrap justify-center p-8 mb-10">
          <img className="w-3/4 lg:w-1/2 py-6" src={imag1} alt="" />
          <div className="flex flex-wrap justify-center lg:justify-start lg:w-1/3 mx-8">
            <h1 className="text-4xl lg:text-5xl text-center lg:text-left text-white py-4">Build The Community Your Fans Will Love.</h1>
            <p className="text-3xl lg:text-2xl text-center lg:text-left text-white w-full py-2">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion</p>
            <button type="button" className="w-1/2 h-14 m-6 lg:m-0 text-sm font-medium text-violet-800 bg-white rounded-full hover:bg-purple-500 hover:text-white">Register</button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end gap-6 lg:px-36 py-10">
        <i className="fa-brands fa-twitter fa-2xl" style={{color: "#ffffff"}}></i>
        <i className="fa-brands fa-facebook fa-2xl" style={{color: "#ffffff"}}></i>
        <i className="fa-brands fa-instagram fa-2xl" style={{color: "#ffffff"}}></i>
        </div>
      </div>
    </div>
  );
}

export default App;
