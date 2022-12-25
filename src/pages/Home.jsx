import {
  Services,
  AboutUs,
  WebProcess,
  Costumer,

} from "../container";
import { Slidert } from "../components";
import { Helmet } from "react-helmet-async";
const Home =()=>{
  return(
    <>
    <Helmet>
      <title>sientech</title>
      <meta name="description" content="sientech Limited is a software firm that provides services such as websites, Graphic Designing among others" />
      <link rel="canonical" href="/"/>
    </Helmet>

  <Slidert /> 
  <AboutUs />
  <Services />
  <WebProcess />
  <Costumer /></>
  )
}

export default Home