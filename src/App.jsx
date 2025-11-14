import AppRoutes from './utils/AppRoutes'
import "./App.css"
import { Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      {AppRoutes()}
    </Routes>
  )
}
