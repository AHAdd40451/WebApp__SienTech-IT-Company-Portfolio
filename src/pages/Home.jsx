import {
  Services,
  AboutUs,
  WebProcess,
  Costumer,

} from "../container";
import { Slidert } from "../components";


const Home =()=>{
  return(
  <>
  <Slidert /> 
  <AboutUs />
  <Services />
  <WebProcess />
  <Costumer />
  </>
  )
}

export default Home