import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { mens_kurta } from '../../../Data/mens_data';
import { mens_jeans } from '../../../Data/mens_data';
import { mens_shirts } from '../../../Data/mens_data';

const HomePage = () => {
    return (
        <div>
            {/* upper section */}
            <MainCarousel/>
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                 {/* Below section */}
                <HomeSectionCarousel data={mens_kurta} SectionName={"Men's kurta"}/>
                <HomeSectionCarousel data={mens_jeans} SectionName={"Men's jeans"}/>
                <HomeSectionCarousel data={mens_shirts} SectionName={"Men's shirts"}/>
            </div>
        </div>
    )
}

export default HomePage;