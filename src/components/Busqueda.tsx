
const Busqueda = ({ onChange , placeholder, className1, className2 } : any) => {

    return (
      <>
        <div className="container">
          <div className={className1}>
            <input
              type="search"
              className={className2}
              placeholder={placeholder}
              onChange={onChange}
            />
          </div>
        </div>
      </>
    );
  };
  
  export default Busqueda;
  