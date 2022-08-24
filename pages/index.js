import Head from 'next/head'
import Nav from '../components/nav/Nav'
import { useState } from 'react'
import allThemes from '../styles/themes'
import Input from '../components/input/Input'
import Card from '../components/card/Card'


export default function Home({data}) {

  const [theme,setTheme] = useState(true)

  let [darkMode,lightMode] = allThemes

  function switchTheme(){
    setTheme(prev=>!prev)
  }

  const [formInput,setFormInputs] = useState("")

  const handleInput = (event) => {
    let{value} = event.target
    setFormInputs(value) 
  }


  return (
    <div style={theme?lightMode:darkMode}>
      <Head>
        <title>countries of the world</title>
        <meta name="description" content="App that shows countries of the world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav handleClick = {switchTheme} theme = {theme}/>
      <Input theme={theme} handleInput={handleInput}/>
      <Card theme={theme} countries= {data} formInput={formInput}/>
      
    </div>
  )
}

export async function getServerSideProps() {
  const url = "https://restcountries.com/v3.1/all"
  const res = await fetch(url)
  const data = await res.json()
  return { props: { data } }
}
