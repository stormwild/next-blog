import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

function NavBar() {
  return <>
    <nav>
      <ul>
        <li>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a>About</a>
          </Link>
        </li>
      </ul>
      <ThemeSwitch />
    </nav>
    <style jsx>{`
      nav {
        background-color: cadetblue;
        display: flex;
        justify-content: space-between;
      }
      a:link {
        text-decoration: none;
      }
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        display: inline-block;
      }

      li:not(:first-child) {
        border-left: 1px solid transparent;
      }
      li > a {
        display: block;
        background-color: chartreuse;
        padding: 0.5rem 1rem;
      }

      li > a:focus,
      li > a:hover {
        background-color: darkgrey;
      }
    `}</style>
  </>;
}

export default NavBar;
