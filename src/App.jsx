import FormRenderer from "./components/FormRenderer"
import { schema } from "./formSchema/schema"


function App() {


  return (
    <>
      <div className="form-container">
        <FormRenderer schema={schema} />
      </div>
    </>
  )
}

export default App
