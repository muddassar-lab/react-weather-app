import { useState, useEffect } from "react";
import Input from "./Input";
import { motion } from "framer-motion";
import Info from "./Info";
const Box = (props) => {
  const [data, setData] = useState({ cod: 404 });
  const [city, setCity] = useState("");
  const inputChange = (event) => {
    setCity(event.target.value);
  };
  useEffect(() => {
    const fetchapi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=315ce1b579881fb3c2cf94eea420ed5b`;
      const response = await fetch(url);
      const datares = await response.json();
      setData(datares);
      console.log(datares);
    };
    if (city !== "") {
      fetchapi();
    }
  }, [city]);
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div className="main-box">
      <Input city={city} onSelect={inputChange}></Input>
      {city !== "" ? (
        <motion.div initial="hidden" animate="visible" variants={variants}>
          <Info city={city} data={data}></Info>
        </motion.div>
      ) : (
        <div className="main-display">
          <motion.div initial="hidden" animate="visible" variants={variants}>
            <h1>React-Weather-App</h1>
          </motion.div>
        </div>
      )}
    </div>
  );
};
export default Box;
