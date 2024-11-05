import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, id, selectedPage, setSelectedPage }) => {
  return (
    <AnchorLink
      className={`${
        selectedPage === id ? "text-gray-600 " : "text-black-10"
      } transition duration-500 hover:text-blue-10`}
      href={`#${id}`}
      onClick={() => setSelectedPage(id)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
