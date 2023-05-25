import cImg1 from "../../../../assets/home/slide1.jpg"
import cImg2 from "../../../../assets/home/slide2.jpg"
import cImg3 from "../../../../assets/home/slide3.jpg"


const Feature = () => {
    const categories = [
        cImg1,
        cImg2,
        cImg3,
    ]
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="w-96 text-center mx-auto">
                <p className='text-[#D99904] italic font-semibold my-5'>--- From 11.00am to 10.00pm ---</p>
                <p className="text-2xl py-5 border-y-2 font-bold border-gray-500">ORDER ONLINE</p>
            </div>
            <div className="flex justify-center gap-11 mt-10">
                {
                    categories.map((category, index) => <img key={index} src={category} alt="" />)
                }
            </div>
        </div>
    );
};

export default Feature;