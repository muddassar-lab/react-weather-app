import { useState, useEffect } from "react";
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
      console.log(data);
    };
    if (city !== "") {
      fetchapi();
    }
  }, [city]);
  return (
    <div className="main-box">
      <div className="input-div">
        <input
          type="text"
          value={city}
          placeholder="Search City Name"
          className="search-bar"
          onChange={inputChange}
          name=""
          id=""
        />
      </div>

      <div className="info-div">
        {data.cod == 200 ? (
          <div>
            <h1 className="city_name">{city}</h1>
            <h1 className="temp">{data.main.temp}</h1>
            <p className="min_max">
              Max : {data.main.temp_max} Cel | Min : {data.main.temp_max} Cel
            </p>
          </div>
        ) : (
          <h1 className="temp">City Not Found</h1>
        )}
      </div>
    </div>
  );
};
export default Box;
