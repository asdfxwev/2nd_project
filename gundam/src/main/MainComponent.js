import IntersectionObservers from './IntersectionObservers'
import IntersectionObserverss from './IntersectionObserverss'
import ProjectImg from './ProductImg'
import Slider from './Slider';
import Slide from './Slide';
import MainTab from './MainTab';
import BrandFigure from './BrandFigure';
import SlideScroll from './SlideScroll';

export default function MainComponent () {

    return (
        <main style={{height:'700vh'}}>
            <Slide />
            {/* <Slider /> */}
            {/* <IntersectionObserverss /> */}
            <MainTab />
            <IntersectionObservers />
            <BrandFigure />
            <SlideScroll />
            <ProjectImg />
        </main>
    )
}