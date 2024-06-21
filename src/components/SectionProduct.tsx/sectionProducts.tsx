import { productService } from '@/services/product'
import { TGetDataCategory } from '@/utils/type'
import ViewCategories from './viewCategories'
import ViewProducts from './viewProducts'

const SectionProducts = async () => {
    const { categories, ProductsByCategory } = await getData();
    
    return (
        <div className='gap-5 grid  md:grid-cols-4'>
            <div className='  md:col-span-3'>
                <ViewProducts/>
            </div>
            <div>
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
