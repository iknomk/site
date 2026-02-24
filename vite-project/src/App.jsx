import Header from "./components/Header";
import Main from "./components/Main"
function App() {
  return (
    <div className="min-h-screen bg-white rubik-font">
      <div className="w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App
