import Heading from "../../../components/heading/Heading";
import img1 from "../../../../assets/home/slide1.jpg"
import img2 from "../../../../assets/home/slide2.jpg"
import img3 from "../../../../assets/home/slide3.jpg"
const Category = () => {
    const images = [img1, img2, img3]
    return (
        <div>
            <Heading title="From 11:00am to 10:00pm" pera="Order Online" />
            <div className="flex justify-center gap-11 py-20">
                {
                    images.map((img, index) => <img key={img} src={img} alt="" />)
                }
            </div>
        </div>
    );
};

export default Category;