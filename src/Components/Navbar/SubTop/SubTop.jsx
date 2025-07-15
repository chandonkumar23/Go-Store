import LocationPinIcon from '@mui/icons-material/LocationOn'; // Fixed incorrect import
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

const SubTop = () => {
    return (
        <div>
            {/* Top Banner */}
            <div className="bg-gradient-to-r from-[#DF4979] via-[#E36B31] to-[#E36B31] px-4 py-2 text-white text-center text-sm md:text-md font-semibold">
                Donate to support families affected by the war in Bangladesh!
            </div>

            {/* Info Bar */}
            <div className="border-b-2 px-4 py-3">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0">
                    {/* Left Section: Icons */}
                    <div className="flex flex-wrap gap-4 items-center text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                            <LocationPinIcon fontSize="small" />
                            <span>Store Locator</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <BatteryChargingFullIcon fontSize="small" />
                            <span>Order Tracking</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <LiveHelpIcon fontSize="small" />
                            <span>FAQ's</span>
                        </div>
                    </div>

                    {/* Right Section: Contact Info */}
                    <div className="text-sm text-gray-600 mt-2 md:mt-0 text-left md:text-right">
                        <span className="block md:inline">Select your language</span>
                        <span className="hidden md:inline mx-2">|</span>
                        <span className="block md:inline">Need help? Call: (+800) 1234 5678 90 or </span>
                        <span className="block md:inline">info@company.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubTop;
