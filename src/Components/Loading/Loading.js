import React from 'react';
import { motion } from "framer-motion";

const style = {
    width: 30,
    height: 30,
    opacity: 1,
    margin: 10,
    borderRadius: 0,
    display: "inline-block",
    background: "#c81c60",
    textAlign:'center'
}
  
const variants = {
    start: {
        scale: 0.2,
        rotate: 0,
    },
    end: {
        scale: 1,
        rotate: 360,
    },
}



const Loding = () => {
    return (
        <div className='text-center justify-content-center m-auto'>
          <motion.div
                    style={style}
                    variants={variants}
                    initial={"start"}
                    animate={"end"}
                    transition={{    
                      repeat: "Infinity",
                      repeatType: "reverse",
                      ease: "anticipate",
                      duration: 1, 
                      delay: 0
                    }}
                />
          <motion.div
                    style={style}
                    variants={variants}
                    initial={"start"}
                    animate={"end"}
                    transition={{    
                      repeat: "Infinity",
                      repeatType: "reverse",
                      ease: "anticipate",
                      duration: 1, 
                      delay: 0.2
                    }}
                />
          <motion.div
                    style={style}
                    variants={variants}
                    initial={"start"}
                    animate={"end"}
                    transition={{    
                      repeat: "Infinity",
                      repeatType: "reverse",
                      ease: "anticipate",
                      duration: 1, 
                      delay: 0.4
                    }}
                />
          <motion.div
                    style={style}
                    variants={variants}
                    initial={"start"}
                    animate={"end"}
                    transition={{    
                      repeat: "Infinity",
                      repeatType: "reverse",
                      ease: "anticipate",
                      duration: 1, 
                      delay: 0.6
                    }}
                />
          <motion.div
                    style={style}
                    variants={variants}
                    initial={"start"}
                    animate={"end"}
                    transition={{    
                      repeat: "Infinity",
                      repeatType: "reverse",
                      ease: "anticipate",
                      duration: 1, 
                      delay: 0.8
                    }}
                />    
        </div>
    );
};

export default Loding;