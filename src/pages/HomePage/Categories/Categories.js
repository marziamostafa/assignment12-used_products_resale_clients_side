import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {

    // const [categories, setCategories] = useState([])
    // useEffect(() => {
    //     fetch('category.json')
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // }, [])

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })

    console.log(categories)
    return (
        <div className='my-10'>
            <h2 className='text-4xl text-center'>Here we have {categories.length} categories</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:ml-10 md:grid-cols-2 my-6'>
                {
                    categories.map(category => <CategoryCard
                        key={category.id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Categories;