import CategoryPost from "./CategoryPost";
import Footer from "./Footer";
import Navbar from "./Navbar";
export default function Layout({ children, categories }) {
  return (
    <>
      <Navbar categories={categories}></Navbar>
      <div className="wrapper">
        <CategoryPost categories={categories}></CategoryPost>
        {children}
      </div>
      <Footer></Footer>
    </>
  );
}
