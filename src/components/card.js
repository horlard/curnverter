import React from 'react';

import '../card.css';

 const styles= {
     div : {
        width:'500px',
         background:'#8787f3',
         height:'300px',
         borderRadius:'10px',
         boxShadow:'0 6px 15px rgba(0,0,0,.6)'

     },
     container: {
         display:'flex',
         justifyContent:'center',
         alignItems:'center',
         height:'100vh'
     }
 }
const Card=(props)=> {
    return (
        <div style={styles.container} className='card'>
            <div style={styles.div} >
                {props.children}
            </div>
            

        </div>
        
    )
}

export default Card;