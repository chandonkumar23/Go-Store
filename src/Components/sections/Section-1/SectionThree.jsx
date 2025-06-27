import { useEffect, useState } from "react";


const SaleSection = () => {
    const [timer, setTimer] = useState({ days: 99, hours: 22, minutes: 56, seconds: 41 });

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                let { days, hours, minutes, seconds } = prev;
                if (seconds > 0) seconds--;
                else {
                    seconds = 59;
                    if (minutes > 0) minutes--;
                    else {
                        minutes = 59;
                        if (hours > 0) hours--;
                        else {
                            hours = 23;
                            if (days > 0) days--;
                        }
                    }
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white mb-20  ">
            <div className="flex gap-10 ">
                <div>
                    <img className="w-[900px] h-[600px]" src="https://i.ibb.co/mrTbZxT6/banner-deal.jpg" alt="saller model" />
                </div>
                <div className="top-20">
                    <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-lg text-sm font-semibold mb-5">
                        LIMITED OFFER
                    </button>
                    <h1 className="text-5xl font-semibold mb-10">Weekly Sale on 35%</h1>
                    <div className="flex space-x-12 text-black font-bold">
                        <div className="text-center">
                            <p className="text-6xl">{String(timer.days).padStart(2, '0')}</p>
                            <p className="text-red-500">DAYS</p>
                        </div>
                        <div className="text-center">
                            <p className="text-6xl">{String(timer.hours).padStart(2, '0')}</p>
                            <p className="text-red-500">HRS</p>
                        </div>
                        <div className="text-center">
                            <p className="text-6xl">{String(timer.minutes).padStart(2, '0')}</p>
                            <p className="text-red-500">MINS</p>
                        </div>
                        <div className="text-center">
                            <p className="text-6xl">{String(timer.seconds).padStart(2, '0')}</p>
                            <p className="text-red-500">SECS</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SaleSection;
