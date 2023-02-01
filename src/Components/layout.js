import Header from "@/Components/header";
import Footer from "@/Components/footer";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
