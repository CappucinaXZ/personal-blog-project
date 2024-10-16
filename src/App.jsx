import { useState } from 'react'
//import './App.css'
function NavBar() {
  return (
    <nav class="flex flex-row justify-between py-4 px-8 bg-[#F9F8F6] border-b ">
      <div>
        <p class ="text-[44px] mx-10">home</p>
      </div>

      <div class="flex flex-row justify-between bg-red-100 px-2">
        <button class = "rounded-full bg-white my-2 mx-2 w-[127px] h-[48px] border-2 border-black hover:bg-gray-200">
          Log in
        </button>

        <button class="rounded-full bg-[#26231E] my-2 mx-2 w-[127px] h-[48px] text-white border-2 border-white hover:bg-gray-600">
          Sign up
        </button>
      </div>
    </nav>
    );
}

function HeroSection(){
  <div class ="flex flex-row justify-between py-4 px-8 bg-[#F9F8F6] border-b w-fill h-[529px]">
    <div class ="bg white">
      <p>abc</p>
    </div>
  </div>
}


function App() {
  const [count, setCount] = useState(0)

  return (
  // <section>
  //   <h1>My First React App on Vite</h1>
  // </section>
  <>
    <NavBar />
    <HeroSection />
  </>
  );
}

export default App
