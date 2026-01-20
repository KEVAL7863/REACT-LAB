import Firstclass from "./second/firstclass"
import CardComponent from "./second/cardcomponent"
import StateExample from  "./third/class_states"
import StringState from "./third/string_state"
import RenderCond from "./third/render_cond"
import colorcond from "./third/colorcond"
import Registration from "./third/state_exercise"
import Contactbook from "./contactbook"
import PracticeExercise from "./practiceexersice"
import Multipart from "./third/multipart"
import Hook1 from "./third/hook1"
import Hook2 from "./third/hook2"
function App() {
  return (
    <>
      <Firstclass />
      <CardComponent/>
      <StateExample/><StringState/><RenderCond/><colorcond/><Registration/><Contactbook/><PracticeExercise/><Multipart/><Hook1/><Hook2/>
    </>
  )
}

export default App

//npm install vite@latest
//npm run dev
//npm run built