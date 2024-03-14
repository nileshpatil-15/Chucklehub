import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="d-flex h-100 ">
      <section className="d-flex flex-grow-1  justify-content-center align-items-center   ">
        <Outlet />
      </section>

      <img
        src="/ivana-cajina-dnL6ZIpht2s-unsplash.jpg"
        className="img-fluid w-50 d-none d-md-block  "
        alt="Responsive image"
      ></img>
    </section>
  );
};

export default AuthLayout;
