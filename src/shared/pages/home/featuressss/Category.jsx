import cImg1 from "../../../../assets/home/slide1.jpg"
import cImg2 from "../../../../assets/home/slide2.jpg"
import cImg3 from "../../../../assets/home/slide3.jpg"
import Heading from "../../../components/heading/Heading";


const Feature = () => {
    const categories = [
        cImg1,
        cImg2,
        cImg3,
    ]
    return (
        <div className="max-w-screen-xl mx-auto">
            <Heading title=" From 11.00am to 10.00pm " pera="ORDER ONLINE" />
            <div className="flex justify-center gap-11 mt-10">
                {
                    categories.map((category, index) => <img key={index} src={category} alt="" />)
                }
            </div>
        </div>
    );
};

export default Feature;