import { useParams } from "react-router-dom";
import DashboardCard from "../components/Dashboardcard";
import LineChartComponent from "../components/LineChartComponent";
import { motion } from "framer-motion";
import { MdCo2, MdGrain } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { Wind, Thermometer } from "lucide-react";
import { FaVirus, FaBroom } from "react-icons/fa";

const Dashboard2 = () => {
  const { deviceName } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 space-y-4"
    >
      {/* Title */}
      <h1 className="text-2xl font-bold mb-2">
        {deviceName ? `Dashboard for ${deviceName}` : "Admin Dashboard"}
      </h1>

      {/* Dashboard Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-5 pb-5 px-10">
        <div className="shadow-[0_2px_6px_rgba(0,0,0,0.15)]">
          <DashboardCard
            title="Air Quality Index"
            value="176.5"
            unit="AQI"
            color="text-purple-600"
            icon={<Wind size={24} />}
          />
        </div>
        <div className="shadow-[0_2px_6px_rgba(0,0,0,0.15)]">
          <DashboardCard
            title="VOCs"
            value="421"
            unit="ppb"
            color="text-yellow-500"
            icon={<FaVirus size={24} />}
          />
        </div>
        <div className="shadow-[0_2px_6px_rgba(0,0,0,0.15)]">
          <DashboardCard
            title="Humidity"
            value="54.3"
            unit="%"
            color="text-black"
            icon={<WiHumidity size={30} />}
          />
        </div>
        <div className="shadow-[0_2px_6px_rgba(0,0,0,0.15)]">
          <DashboardCard
            title="CO2"
            value="831"
            unit="ppm"
            color="text-black"
            icon={<MdCo2 size={30} />}
          />
        </div>
        <div className="shadow-[0_2px_6px_rgba(0,0,0,0.15)]">
          <DashboardCard
            title="PM1"
            value="15"
            unit="µg/m³"
            color="text-black"
            icon={<MdGrain size={24} />}
          />
        </div>
        <div className="shadow-[0_2px_6px_rgba(0,0,0,0.15)]">
          <DashboardCard
            title="PM2.5"
            value="42"
            unit="µg/m³"
            color="text-black"
            icon={<FaBroom size={24} />}
          />
        </div>
        <div className="shadow-[0_2px_6px_rgba(0,0,0,0.15)]">
          <DashboardCard
            title="PM10"
            value="67"
            unit="µg/m³"
            color="text-black"
            icon={<MdGrain size={24} />}
          />
        </div>
        <div className="shadow-[0_2px_6px_rgba(0,0,0,0.15)]">
          <DashboardCard
            title="Temperature"
            value="36.8"
            unit="°C"
            color="text-red-500"
            icon={<Thermometer size={24} />}
          />
        </div>
      </div>

      {/* Line Chart Section */}
      <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-all">
        <h2 className="text-xl font-semibold mb-2">
          Temperature & Humidity History
        </h2>
        <LineChartComponent deviceName={deviceName} />
      </div>
    </motion.div>
  );
};

export default Dashboard2;
