import Navbar from './Navbar';
import Footer from './Footer';
import StarField from '../backgrounds/StarField';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark-bg relative">
      <StarField />
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
