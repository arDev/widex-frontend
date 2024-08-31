const Busqueda = ({ onChange, value, placeholder, className1, className2 }) => {
    return (
      <>
        <div className="container">
          <div className={className1}>
            <input
              type="search"
              className={className2}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          </div>
        </div>
      </>
    );
  };
  
  export default Busqueda;
  