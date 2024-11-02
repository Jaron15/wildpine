import Footer from './Footer';
import NavBar from './navbar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <div className='w-full h-0.5 bg-black'>
</div>
      <Footer />
    </>
  );
};

export default Layout;
