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
  return(
    <div class = "flex flex-row justify-center bg-red-100 py-4 px-8 bg-[#F9F8F6] border-b w-fill h-hug">
      <div class = "flex flex-col justify-center bg-white font-bold text-[52px] my-5 mx-5">
        <p>Stay</p>
        <p>Informed,</p>
        <p>Stay Inspired</p>
      </div>
      <div class = "bg-blue-100 my-5 mx-5">
        <img class ="border-4 border-black" src="https://raw.githubusercontent.com/CappucinaXZ/personal-blog-project/refs/heads/main/component/I_forgot.png"></img>
      </div>
      <div class = "flex flex-col justify-center bg-green-100 w-[347px] my-5 mx-5">
        <p class = "flex items-center text-[12px]">- Author</p>
        <p class = "flex items-center text-[24px] font-bold">Mocca MC</p><br></br>
        <p class ="text-[16px]">Hi I am mocca this is my blog for learning react and up my skill
        </p><br></br>
      </div>
    </div>
  );
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
