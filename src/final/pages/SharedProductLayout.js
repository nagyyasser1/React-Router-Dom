import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div style={{ margin: "auto", width: "84%" }}>
        <h1>products</h1>
      </div>
      <Outlet />
    </>
  );
};
export default Home;
