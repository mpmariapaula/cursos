import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { CourseList } from '../pages/CourseList'

export function AppRoutes() {
  return (
    // O basename="/cursos" garante funcionamento perfeito no GitHub Pages[cite: 1, 2]
    <BrowserRouter basename="/cursos">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<CourseList />} />
      </Routes>
    </BrowserRouter>
  )
}