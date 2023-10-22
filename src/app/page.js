import './globals.css'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Aba } from './components/Aba'

const colors = {
  darkgreen: '#40513B',
  middlegreen: '#609966',
  lightgreen: '#EDF1D6',
  lightgrey: '#D9D9D9',
  black: '#000000',
  white: '#ffffff'
}

export default function Home() {
  return (
    <main style={{backgroundColor: colors.lightgreen}}>
      <Header color={colors} />
      <Menu color={colors} />
      <Aba color={colors} subtitulo={'Receitas'} />
    </main>
  )
}
