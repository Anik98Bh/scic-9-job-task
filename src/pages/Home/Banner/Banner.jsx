
const Banner = () => {
    return (
        <div className="lg:flex gap-2">
            <img className="w-1/2 bg-[#DC1195] rounded-b-full" src={"https://cdn-icons-png.flaticon.com/512/10017/10017650.png"} alt="" />
            <div className="pt-20 px-10">
                <h1 className="text-4xl font-bold text-center">Ready to take payments using DigiWallet?</h1>
                <p className="mt-4">Integrate with the payment solution that fits your business need
                and Enrich your customers online payment experience.</p>
            </div>
        </div>
    );
};

export default Banner;