import React from 'react';

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
         height:'100vh',
         background:'#5d5dbb'
     }
 }
const Card=(props)=> {
    return (
        <div style={styles.container}>
            <div style={styles.div}>
                {props.children}
            </div>
        </div>
        
    )
}

export default Card;