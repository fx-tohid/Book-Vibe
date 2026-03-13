
// import './App.css'

import { Suspense } from "react"
import Books from "./Components/Books/Books"
import HeroSection from "./Components/HeroSection/HeroSection"

function Home() {

  const fetchDatas = fetch('/datas.json').then(res => res.json())

  return (
    <>
      <HeroSection></HeroSection>
      <Suspense fallback={<div>Loading...</div>}>
        <Books fetchDatas={fetchDatas}></Books>
      </Suspense>
      
    </>
  )
}

export default Home
