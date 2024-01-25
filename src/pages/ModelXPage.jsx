import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import modelXImage from '../assets/model-x.jpg'
import ImageBackgroundNoText from "../components/ImageBackgroundNoText/ImageBackgroundNoText";
import teslaChargerImage from '../assets/tesla-charger.jpg'
import ImageGrid from "../components/ImageGrid/ImageGrid";

const featureItems = [
    { title: '335mi', description: 'Range (EPA est.)' },
    { title: '149mph', description: 'Top Speed' },
    { title: '3.8sec', description: '3.8sec' },
];
export default function ModelXPage() {
    return (
        <div className=' container'>
            <section className='section'>
                <ImageBackgroundSection
                    header='Model X'
                    description='From $68,590*'
                    backgroundImage={modelXImage}
                    featureItems={featureItems}
                />
            </section>
            <section className='section'>
                <ImageBackgroundNoText
                    backgroundImage={teslaChargerImage}
                />
            </section>
            <section className='section'>
                <ImageGrid
                    image1={modelXImage}
                    image2={teslaChargerImage}
                    text1='Stay Connected - Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.'
                    text2='Sublime Sound - A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are.'
                />
            </section>
        </div>
    )
}