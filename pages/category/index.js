import React from 'react'
import Category from '../../components/Category'
import { client } from '../../lib/client'

function index({ categoryData }) {
    console.log(categoryData)
    return (
        <div>
            <div className='mt-6 grid grid-cols-1 gap-y-5 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
                {categoryData?.map((category) => <Category categoryData={category} />)}
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {

    const categoryQuery = `*[_type == "category"]`;
    const categoryData = await client.fetch(categoryQuery);

    return {
        props: { categoryData }
        //Passed to top props
    }
}

export default index