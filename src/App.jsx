import FormRenderer from "./components/FormRenderer"
import { schema } from "./schema/schema"


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
