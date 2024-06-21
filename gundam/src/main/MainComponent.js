import IntersectionObservers from './IntersectionObservers'
import ProjectImg from './ProductImg'
import Slider from './Slider';
import MainTab from './MainTab';
import BrandFigure from './BrandFigure';

export default function MainComponent () {

    return (
        <main style={{height:'500vh'}}>
            <Slider />
            <MainTab />
            <IntersectionObservers />
            <BrandFigure />
            <ProjectImg />
        </main>
    )
}