import Carousel from 'react-bootstrap/Carousel';


function DasCarousel() {
    return (
        <Carousel data-bs-theme="dark" style={{ height: '40vh' }}>
            <Carousel.Item className="text-white">
                <video
                    className="d-block w-100"
                    src="https://images.samsung.com/is/content/samsung/assets/in/smartphones/galaxy-s25-ultra/buy/02_Color_Group_Online-Exclusive-KV_video_PC.mp4" 
                    alt="First slide"
                    style={{ height: '40vh' }}
                    autoPlay loop  muted
                />
                <Carousel.Caption style={{  color: 'black' }}>
                    <h5>Samsung S25 / S25+</h5>
                </Carousel.Caption>
            </Carousel.Item>
    
            <Carousel.Item>
                <video
                    className="d-block w-100"
                    src="https://images.samsung.com/is/content/samsung/assets/in/2407/pcd/smp/New_PCD_B6Q6_Main-KV_1440x640_pc.mp4"  
                    alt="Second slide"
                    style={{ height: '40vh' }}
                    autoPlay loop muted
                />
                <Carousel.Caption style={{ color: 'black' }}>
                    <h5>Galaxy Z-Fold / Z-Flip </h5>
                </Carousel.Caption>
            </Carousel.Item>
    
            <Carousel.Item>
                <video
                    className="d-block w-100"
                    src="https://images.samsung.com/is/content/samsung/assets/in/smartphones/galaxy-s25-ultra/buy/01_Color_Group_Online-Exclusive-KV_video_PC.mp4"  
                    alt="Third slide"
                    style={{ height: '40vh' }}
                    autoPlay loop  muted
                />
                <Carousel.Caption style={{  color: 'black' }}>
                    <h5>Galaxy S25 Ultra</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
    
}

export default DasCarousel;