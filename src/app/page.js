'use client';

import './globals.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormDashboard } from './components/FormDashboard';
import { FormInventario } from './components/FormInventario'
import { FormReceitas } from './components/FormReceitas';
import { FormRelatorio } from './components/FormRelatorio';
import { Menu } from './components/Menu'
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

  return (
    <main style={{backgroundColor: colors.lightgreen}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu color={colors} />}>
            <Route index element={<FormInventario color={colors} />} />
            <Route path="dashboard" element={<FormDashboard color={colors} />} />
            <Route path="relatorio" element={<FormRelatorio color={colors} />} />
            <Route path="receitas" element={<FormReceitas color={colors} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}
