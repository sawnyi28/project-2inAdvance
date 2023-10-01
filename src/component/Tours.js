import React from 'react'
import Title from './Title';
import { services } from '../data';
import { tours } from '../data';
import Tour from './Tour';
const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <Title title = 'featured' subTitle= 'tours'></Title>
   

        <div className="section-center featured-center">
          {
            tours.map((tou)=>{
             
              return (
               
               <Tour></Tour>
              );
            })
          }
          

          
         

        
        </div>
      </section>
    </>
  );
}

export default Tours