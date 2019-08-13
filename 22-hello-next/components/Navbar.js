import Link from "next/link";

const Navbar = () => {
  const styles = {
    navbar: {
      display: "flex",
      // flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: "#555555"
    },
    button: {
      backgroundColor: "#008CBA" /* Green */,
      border: "none",
      color: "white",
      padding: "15px 32px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: 16
    }
  };

  return (
    <div style={styles.navbar}>
      <Link href="/">
        {/* you can use any element that accepts onClick <a>, <span>, <button>, etc... */}
        <button style={styles.button} title="Home">
          <h2>Home</h2>
        </button>
      </Link>
      <Link href="/about">
        {/* you can use any element that accepts onClick <a>, <span>, <button>, etc... */}
        <button style={styles.button} title="About Section">
          <h2>About</h2>
        </button>
      </Link>
      <Link href="/contact">
        <button style={styles.button} title="Contac">
          <h2>Contact</h2>
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
