

const Overview = () => {
    return (
        <div className="w-11/12 md:w-11/12 mt-32 lg:w-full mx-auto hero rounded-lg bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse justify-around gap-8 mx-auto">
                <img src="https://i.ibb.co/yPjMmF2/simply-soft-gradation-technology-background-free-vector.jpg" className="w-[380px] md:w-[730px] lg:w-full rounded-lg shadow-2xl" />
                <div className="p-10">
                    <h1 className="text-3xl lg:text-5xl font-extrabold">Tech Overview</h1>
                    <p className="py-6 text-xl font-medium">Discover tech trends, brands, and innovations in our Quick Overview.</p>
                    <button className="btn btn-info text-white">Quick Overview →</button>
                </div>
            </div>
        </div>
    );
};

export default Overview;