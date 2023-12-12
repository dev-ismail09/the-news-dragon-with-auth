import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [catagories, setCatagories] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/catagories`)
        .then(res => res.json())
        .then(data => setCatagories(data))
        .catch(error => console.error(error))
    },[])

    return (
        <div>
            <h4>All Caterogy</h4>
            <div className='mt-4 ms-3'>
                {
                    catagories.map(catagory => <p key={catagory.id}>
                        <Link className='fs-6 text-black text-decoration-none' to={`catagory/${catagory.id}`}>{catagory.name}</Link>
                        </p> )
                }
            </div>
        </div>
    );
};

export default LeftNav;