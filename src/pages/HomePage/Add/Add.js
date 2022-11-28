import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import AddCard from './AddCard';

const Add = () => {

    const [adds, setAdds] = useState([])
    useEffect(() => {
        axios.get('https://b612-used-products-resale-server-side-marziamostafa.vercel.app/makeadd')
            .then(data => setAdds(data.data))
    }, [])

    const handleDeleteAdds = id => {
        const proceed = window.confirm('Do you want to delete this add?')
        if (proceed) {
            fetch(`https://b612-used-products-resale-server-side-marziamostafa.vercel.app/makeadd/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Add Deleted Successfully')
                        const remaining = adds.filter(add => add._id !== id)
                        setAdds(remaining)
                        window.location.reload()
                    }
                })
        }
    }

    if (adds.length) {
        return (
            <div className='my-10'>
                <h2 className='text-center text-4xl'>Advertisment</h2>
                <div className='grid lg:grid-cols-3 mt-10'>
                    {
                        adds.map(add => <AddCard
                            key={add._id}
                            add={add}
                            handleDeleteAdds={handleDeleteAdds}
                        ></AddCard>)
                    }
                </div>
            </div>
        );
    }
};

export default Add;