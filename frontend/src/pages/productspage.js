import React, { useEffect, useState } from 'react'
import axios from 'axios';



const  Productspage = ()  => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const data =  axios.get('http://localhost:8000/products').then((res) => {
            setData(res.data);
            
        }) 
    },[])

    console.log(data);
    return (
        <div>

            
        </div>
    )
}

export default Productspage
