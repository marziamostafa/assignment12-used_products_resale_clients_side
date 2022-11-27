import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddCard from './AddCard';

const Add = () => {

    const [adds, setAdds] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/makeadd')
            .then(data => setAdds(data.data))
    }, [])


    if (adds.length) {
        return (
            <div className='my-10'>
                <h2 className='text-center text-4xl'>Advertisment</h2>
                <div className='grid lg:grid-cols-3 mt-10'>
                    {
                        adds.map(add => <AddCard
                            key={add._id}
                            add={add}
                        ></AddCard>)
                    }
                </div>
            </div>
        );
    }
};

export default Add;