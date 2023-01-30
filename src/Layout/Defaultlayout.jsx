import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function DefaultLayout({ children }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default DefaultLayout;
