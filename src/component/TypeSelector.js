const TypeSelector = ({ qtype, setQtype }) => {
  return (
    <>
      <div className="col-md-6 offset-md-3 col-12">
        <select
          className="custom-select"
          value={qtype}
          onChange={(event) => {
            let type = parseInt(event.target.value);
            setQtype(type);
          }}
        >
          <option value="0">Choose Question Type</option>
          <option value="1">Multi-Select</option>
          <option value="2">Single-Select</option>
        </select>
      </div>
    </>
  );
};

export default TypeSelector;
