import React, { useState} from "react";
import { FaCloudSun } from "react-icons/fa";
import { BsFillCloudLightningFill } from "react-icons/bs";

//containers
import CounterFunction from "./container/CounterFunction";
import WeatherGrid from "./container/WeatherGrid";
// import Form from "./container/Form";

//component 
import WeatherCard from "./components/WeatherCard";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      {
        show && <CounterFunction/>
      }
      <button onClick={() => setShow(!show)}>Show</button> 
      {/* </Form>
      <WeatherGrid>
        <WeatherCard
          title="Lisbon 123"
          temperature="21°C"
          icon={<FaCloudSun />}
          color = "red"
          fullWidth={true}
        />
        <WeatherCard
          title="Lisbon"
          temperature="21°C"
          icon={<FaCloudSun />}
          color = "red"
          fullWidth={true}
        />
        <WeatherCard
          title="Lisbon"
          temperature="21°C"
          icon={<FaCloudSun />}
          color = "red"
          fullWidth={true}
        />
        <WeatherCard
          title="Lisbon"
          temperature="21°C"
          icon={<FaCloudSun />}
          color = "red"
          fullWidth={true}
        />
        <WeatherCard
          title="Lisbon"
          temperature="21°C"
          icon={<FaCloudSun />}
          color = "red"
          fullWidth={true}
        />
        <WeatherCard
          title="Lisbon"
          temperature="21°C"
          icon={<FaCloudSun />}
          color = "red"
          fullWidth={true}
        />
        <WeatherCard
          title="Lisbon"
          temperature="21°C"
          icon={<FaCloudSun />}
          color = "red"
          fullWidth={true}
        />
        <WeatherCard
          title="Lisbon"
          temperature="21°C"
          icon={<FaCloudSun />}
          color = "red"
          fullWidth={true}
        />
        <WeatherCard
          title="Lisbon"
          temperature="21°C"
          icon={<FaCloudSun />}
          color = "red"
          fullWidth={true}
        />
        <WeatherCard
          title="Lisbon"
          temperature="21°C"
          icon={<FaCloudSun />}
          color = "red"
          fullWidth={true}
        />
        
      </WeatherGrid> */}
    </div>
  );
}

export default App;
