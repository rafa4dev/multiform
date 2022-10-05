import { FormProvider } from "./contexts/FormContext";
import { Router } from "./routes";
import './styles/App.global.css';

const App = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  )
}

export default App;