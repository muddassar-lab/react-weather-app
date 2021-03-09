const Input = (props) => {
  return (
    <div className="input-div">
      <input
        type="text"
        value={props.city}
        placeholder="Search City Name"
        className="search-bar"
        onChange={props.onSelect}
        name=""
        id=""
      />
    </div>
  );
};
export default Input;
