import LocationPinIcon from '@mui/icons-material/LocationPin';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
const SubTop = () => {
    return (
        <div>
            <div class="bg-gradient-to-r from-[#DF4979] via-[#E36B31] to-[#E36B31] px-6 py-4 text-white">
                <h2 class="text-md font-semibold text-center">Donate to support families affected by the war in Bangladesh!</h2>
            </div>

            <div className="border-b-2 p-2">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                            <LocationPinIcon className="w-4 h-1" />
                            <span>Store Locator</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <BatteryChargingFullIcon className="w-4 h-1" />
                            <span>Order Tracking</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <LiveHelpIcon className="w-4 h-1" />
                            <span>FAQ's</span>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <h2 className='text-gray-500'>Select your language Need help? Call us: (+800) 1234 5678 90 orinfo@company.com</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SubTop;