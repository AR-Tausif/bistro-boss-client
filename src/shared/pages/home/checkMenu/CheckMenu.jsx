import Heading from "../../../components/heading/Heading";


const CheckMenu = () => {
    const menu = [
        {
            name: "ROAST DUCK BREAST",
            desc: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
            price: "14.5",
        },
        {
            name: "ESCALOPE DE VEAU",
            desc: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
            price: "14.5",
        },
        {
            name: "FISH PARMENTIER",
            desc: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
            price: "14.5",
        },
        {
            name: "TUNA NIÇOISE",
            desc: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
            price: "14.5",
        },
        {
            name: "CHICKEN AND WALNUT SALAD",
            desc: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
            price: "14.5",
        },
        {
            name: "ROASTED PORK BELLY",
            desc: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
            price: "14.5",
        },
    ]
    return (
        <>
            <Heading title="Check it out" pera="FROM OUR MENU" />
            <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-6">
                {
                    menu.map((item, index) => (
                        <div key={index} className="flex gap-8">
                            <p className="text-[20px] text-[#151515]">1</p>
                            <div>
                                <p className="text-3xl"> {item.name} ------------------</p>
                                <p className="text-[#737373]">{item.desc}</p>
                            </div>
                            <p className="text-[#BB8506] text-[20px]">${item.price}</p>
                        </div>
                    ))
                }

            </div>
            <div className="text-center">
                <button className="px-3 bg-purple-500 rounded-sm py-2">
                    View More Menu
                </button>
            </div>
            <div
                className="my-20 max-w-screen-xl mx-auto bg-black text-center text-[50px] text-white py-[96px]">
                Call Us: +88 0192345678910
            </div>
        </>
    );
};

export default CheckMenu;