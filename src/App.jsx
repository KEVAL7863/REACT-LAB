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
import hook from "./third/hook"
function App() {
  return (
    <>
      <Firstclass />
      <CardComponent/>
      <StateExample/><StringState/><RenderCond/><colorcond/><Registration/><Contactbook/><PracticeExercise/><Multipart/><hook/>
    </>
  )
}

export default App

//npm install vite@latest
//npm run dev
//npm run built