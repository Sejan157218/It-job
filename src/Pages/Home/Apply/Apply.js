import React from 'react';
import { useSearchParams } from 'react-router-dom';


const Apply = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const searchid=searchParams.get('id')|| "";
   
    return (
        <div>
            Apply
        </div>
    );
};

export default Apply;