"use client"
import { Divider } from '@nextui-org/react'
import { useContext } from 'react'
import ViewCategories from './viewCategories'
import ViewProducts from './viewProducts'
import { AppContext } from '@/context/appContext'

const SectionProducts = () => {
    const {appState, setAppState}=useContext(AppContext)
    
    const handleChangeCategory = (category: string) => {
        setAppState(category)
    }
    return (
        <div className=' h-screen gap-5 grid grid-cols-4'>
            <div className=' col-span-3'>
                <ViewProducts nameCategory={appState} />
            </div>
            <div>
                <Divider orientation="vertical" />
                <span>Categories</span>
                <ViewCategories onCategorieSelected={handleChangeCategory} />
            </div>
        </div>
    )
}

export default SectionProducts
