import React from 'react';
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Section5 from "./Sections/Section5";
import Section6 from "./Sections/Section6";
import {Route, Routes} from "react-router-dom"

function Mainn ()
{
  return (

  <main className="fondo-celeste">

<Routes>
    <Route path= "/" element={<Section1/>} />
    <Route path= "section2" element={<Section2/>} />
    <Route path= "section3" element={<Section3/>} />
    <Route path= "section4" element={<Section4/>} />
    <Route path= "section5" element={<Section5/>} />
    <Route path= "section6" element={<Section6/>} />
</Routes>

  </main>
  )
}

export default Mainn;