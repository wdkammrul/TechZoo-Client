const Others = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='border-2 p-4 rounded-lg text-center hover:border-rose-500'>
                    <img className='mx-auto my-4 w-20 rounded-full' src="https://i.ibb.co/QJ9Lk5Q/download.png" alt="" />

                    <h2 className='text-2xl font-bold text-white my-2'>Free Training</h2>
                    <p className='text-white mt-4'>
                        "Expand your skills with our free training sessions designed to empower and elevate your knowledge, all at absolutely no cost to you. Take the first step toward growth today!</p>

                </div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='border-2 p-4 rounded-lg text-center hover:border-rose-500'>
                    <img className='mx-auto my-4 w-16 bg-white rounded-full' src="https://htmldemo.net/kidol/kidol/assets/img/icons/f2.png" alt="" />

                    <h2 className='text-2xl font-bold text-white my-2'>Support 24/7</h2>
                    <p className='text-white mt-4'>Our dedicated support team is always ready to lend a helping hand, day or night. Whether you have inquiries about our products, need assistance with placing an order.</p>

                </div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='border-2 p-4 rounded-lg text-center hover:border-rose-500'>
                    <img className='mx-auto my-4 w-16 bg-white rounded-full' src="https://htmldemo.net/kidol/kidol/assets/img/icons/f3.png" alt="" />

                    <h2 className='text-2xl font-bold text-white my-2'>Money Return</h2>
                    <p className='text-white mt-4'> We provide a straightforward return process. Simply reach out to our customer support, and we'll guide you through the return procedure</p>

                </div>
            </div>
        </div>
    );
};

export default Others;