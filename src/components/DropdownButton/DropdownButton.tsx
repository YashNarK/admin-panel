import { MdModeEdit } from "react-icons/md";
import styles from "./DropdownButton.module.css";
const DropdownButton = () => {
  return (
    <details className="dropdown ">
      <summary className="m-1 btn btn-sm btn-ghost">
        <MdModeEdit />
      </summary>
      <ul
        className={[
          "p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52",
          styles.dropdownContent,
        ].join(" ")}
      >
        <li>
          <a>Average Order Value</a>
        </li>
        <li>
          <a>Conversion rate</a>
        </li>
        <li>
          <a>Gross Sales</a>
        </li>
        <li>
          <a>Net return value</a>
        </li>
        <li>
          <a>Store search conversion</a>
        </li>
        <li>
          <a>Return rate</a>
        </li>
      </ul>
    </details>
  );
};

export default DropdownButton;
