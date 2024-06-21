import './SlideScroll.css';
import Slider from 'react-infinite-logo-slider';

export default function SlideScroll() {

    const slideScroll = [
        { id: '1', name: './image/scroll1.jpg', title: 'slideScrollImage1' },
        { id: '2', name: './image/scroll2.jpg', title: 'slideScrollImage2' },
        { id: '3', name: './image/scroll3.jpg', title: 'slideScrollImage3' },
        { id: '4', name: './image/scroll4.jpg', title: 'slideScrollImage4' },
        { id: '5', name: './image/scroll5.jpg', title: 'slideScrollImage5' },
        { id: '6', name: './image/scroll6.jpg', title: 'slideScrollImage6' },
        { id: '7', name: './image/scroll7.jpg', title: 'slideScrollImage7' },
    ];

    return (
        <section style={{ backgroundColor: 'yellow', height: '100vh' }}>
            <div className="slideScrollContainer">
                <div className="slideScrollList">
                    <Slider
                        width="500px"
                        duration={20}
                        blurBorders={true}
                        blurBoderColor={'#0ff'}>
                        {slideScroll.map((scroll) =>
                            <Slider.Slide>
                                <img className="slide" src={scroll.name} alt={scroll.id} />
                            </Slider.Slide>
                        )}
                    </Slider>

                    {/* <Slider
                        width="500px"
                        duration={20}
                        blurBorders={true}
                        blurBoderColor={'#0ff'}>
                            <Slider.Slide>
                                <span>1</span>
                            </Slider.Slide>
                    </Slider> */}
                </div>
            </div>
        </section >
    )
}