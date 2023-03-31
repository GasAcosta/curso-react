

const NotFound = () => {
  return (
    <div
        style={{
          alignItems: "center",
          backgroundColor: "#FABA8A",
          textAlign: "center",
          padding: "8px",
        }}
      >
        <img
          src="https://res.cloudinary.com/ddxobed7l/image/upload/v1680253636/undraw_page_not_found_re_e9o6_bcmid5.svg"
          alt="error-404"
          width="30%"
        />
      <h1>Oops! Esta página del sitio no existe.</h1>
      <h3>Volvé al inicio para seguir navegando.</h3>
      </div>
  );
};

export default NotFound;
