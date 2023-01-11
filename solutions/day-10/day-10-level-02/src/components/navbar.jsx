import Title from "./title";
import Link from "./link";

const Navbar = () => {
  return (
    <>
      <nav>
        <Title text={'Bob_'} />
        <ul>
          <Link href={'/'} content={'Home'} />
          <Link href={'/'} content={'About'} />
          <Link href={'/'} content={'Projects'} />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
