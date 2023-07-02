
import Form from "./components/Form"
import Cards from "./components/Cards"

function App() {

  return (
    <div className='w-full flex flex-row items-center justify-start asd'>
      <img className="img absolute left-0 top-0 " src="../src/images/bg-main-desktop.png" alt="" />
        <Cards/>
        <Form/>
    </div>
  )
}

export default App
