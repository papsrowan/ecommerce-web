import React, { useState } from 'react'
import ViewProducts from './viewProducts'
import { TGetDataCategory, TProduct } from '@/utils/type'
import ViewCategories from './viewCategories'
import { Divider } from '@nextui-org/react'
import { productService } from '@/services/product'

const SectionProducts = async () => {
    const { categories, ProductsByCategory } = await getData();
    
    return (
        <div className=' h-screen gap-5 grid grid-cols-4'>
            <div className=' col-span-3'>
                <ViewProducts Produits={ProductsByCategory}/>
            </div>
            <div>
                <Divider orientation="vertical" />
                <span>Categories</span>
                <ViewCategories categories={categories} />
            </div>
        </div>
    )
}
const getData = async () => {
    const ProductsByCategory: TGetDataCategory = await productService.getProductsByCategory({
        name: 'tops',
    });
    const categories = await productService.getAllProdutsCategories();
    return { categories, ProductsByCategory }
};
export default SectionProducts
