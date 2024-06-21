import IntersectionObservers from './IntersectionObservers'
import ProjectImg from './ProductImg'
import Slider from './Slider';
import MainTab from './MainTab';
import BrandFigure from './BrandFigure';
import SlideScroll from './SlideScroll';

export default function MainComponent () {

    return (
        <main style={{height:'700vh'}}>
            <Slider />
            <MainTab />
            <IntersectionObservers />
            <BrandFigure />
            <SlideScroll />
            <ProjectImg />
        </main>
    )
}