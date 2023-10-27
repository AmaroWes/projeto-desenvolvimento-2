'use client';

import './globals.css'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Aba } from './components/Aba'
import { useState } from 'react'

const colors = {
  darkgreen: '#40513B',
  middlegreen: '#609966',
  lightgreen: '#EDF1D6',
  lightgrey: '#D9D9D9',
  black: '#000000',
  white: '#ffffff'
}

export default function Home() {
  
  const [screen, setScreen] = useState('Inventário');
  const handlerScreen = (handler) => {
    setScreen(handler)
  }

  return (
    <main style={{backgroundColor: colors.lightgreen}}>
      <Header color={colors} />
      <Menu color={colors} handler={handlerScreen} />
      <Aba color={colors} subtitulo={screen} />
    </main>
  )
}
