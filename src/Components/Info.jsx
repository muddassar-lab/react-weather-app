import { motion } from "framer-motion";
const Info = (props) => {
  const tempConverter = (temperature) => {
    return (temperature - 273.15).toFixed(2);
  };
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div className="info-div">
      {props.data.cod == 200 ? (
        <div>
          <motion.div initial="hidden" animate="visible" variants={variants}>
            <h1 className="city_name">{props.data.name}</h1>
            <h1 className="temp">{tempConverter(props.data.main.temp)} Cel</h1>
            <p className="min_max">
              Max : {tempConverter(props.data.main.temp_max)} Cel | Min :{" "}
              {tempConverter(props.data.main.temp_max)} Cel
            </p>
          </motion.div>
        </div>
      ) : (
        <motion.div initial="hidden" animate="visible" variants={variants}>
          <h1 className="temp">City Not Found</h1>
        </motion.div>
      )}
    </div>
  );
};
export default Info;
