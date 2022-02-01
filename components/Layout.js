import CategoryPost from "./CategoryPost";
import Footer from "./Footer";
import Navbar from "./Navbar";
export default function Layout({ children, categories }) {
  return (
    <>
      <div className="wrapper">
        <Navbar categories={categories}></Navbar>
        <CategoryPost categories={categories}></CategoryPost>
        {children}
      </div>
      <Footer></Footer>
    </>
  );
}
