import SideBar from "../Components/Dashboard/Dashboard/SideBar";

const MasterLayout = ({ children }) => {
  return (
    <>
      <SideBar />
      <div>{children}</div>
    </>
  );
};

export default MasterLayout;
