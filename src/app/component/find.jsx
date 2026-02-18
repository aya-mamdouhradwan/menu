'use client';
import Image from "next/image";

import { motion } from "framer-motion";

export default function Find(){
    return(
        <motion.div>
        <div className="ui-card">
            
            <div className="ui-h1">
                <h1 className="hero-badge">Find Your Favourite Food</h1>
            </div>
            <div className="ui-image">
                <Image
                src="/food/opinun1.jpg"
                width={100}
                height={50}
                alt="opinion image"
                
                />
            </div>
            <div>
                <p className="hero-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Nostrum ipsa explicabo minus repellat atque ipsam. Molestias distinctio, 
                 doloribus asperiores blanditiis
                 inventore animi fugiat sequi, aspernatur id accusamus nemo dignissimos suscipit.
            
                </p>
                <p className="hero-subtitle">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Porro ex autem consequuntur assumenda quo, modi tempore sit 
                    ipsam maiores! Quasi atque quo
                     amet maiores minus, excepturi minima aliquam officiis harum!
                </p>
            </div>
            <div>
                <button className="ui-button">
                    Find Food
                </button>
            </div>
            <br/>
            <hr/>
           
        </div>
        </motion.div>


    );
}