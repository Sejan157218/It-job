import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div className='text-start m-5'>
           <h1>Your response has been recorded</h1>
           <Link to="/"> <button className='search-button'>Go Home</button></Link>
           <Link to="/alljob"> <button className='search-button'>See All J0b</button></Link>
        </div>
    );
};

export default Success;