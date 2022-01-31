import CategoryPost from "./CategoryPost";
import Footer from "./Footer";
import Navbar from "./navbar";
export default function Layout({ children, categories }) {
  return (
    <>
      <Navbar categories={categories}></Navbar>
      <CategoryPost categories={categories}></CategoryPost>
      <div className="minHeight">{children}</div>
      <Footer></Footer>
    </>
  );
}
