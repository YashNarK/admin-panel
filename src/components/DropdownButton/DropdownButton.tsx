import { MdModeEdit } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";

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
          <div className="flex text-xs w-full  p-0 py-2 group">
            <div className="flex-grow pl-1">
              <FaChartLine className="inline  mr-2" />
              <a className=" ">Average Order Value</a>
            </div>
            <div className="flex-shrink text-xs pr-1 opacity-0 group-hover:opacity-100">
              <FaRegQuestionCircle />
            </div>
          </div>
        </li>
        <li>
          <div className="flex text-xs w-full  p-0 py-2 group">
            <div className="flex-grow pl-1">
              <FaChartLine className="inline  mr-2" />
              <a className=" ">Conversion rate</a>
            </div>
            <div className="flex-shrink text-xs pr-1 opacity-0 group-hover:opacity-100">
              <FaRegQuestionCircle />
            </div>
          </div>
        </li>
        <li>
          <div className="flex text-xs w-full  p-0 py-2 group">
            <div className="flex-grow pl-1">
              <FaChartLine className="inline  mr-2" />
              <a className=" ">Gross sales</a>
            </div>
            <div className="flex-shrink text-xs pr-1 opacity-0 group-hover:opacity-100">
              <FaRegQuestionCircle />
            </div>
          </div>
        </li>
        <li>
          <div className="flex text-xs w-full  p-0 py-2 group">
            <div className="flex-grow pl-1">
              <FaChartLine className="inline  mr-2" />
              <a className=" ">Net return value</a>
            </div>
            <div className="flex-shrink text-xs pr-1 opacity-0 group-hover:opacity-100">
              <FaRegQuestionCircle />
            </div>
          </div>
        </li>
        <li>
          <div className="flex text-xs w-full  p-0 py-2 group">
            <div className="flex-grow pl-1">
              <FaChartLine className="inline  mr-2" />
              <a className=" ">Store search conversion</a>
            </div>
            <div className="flex-shrink text-xs pr-1 opacity-0 group-hover:opacity-100">
              <FaRegQuestionCircle />
            </div>
          </div>
        </li>
        <li>
          <div className="flex text-xs w-full  p-0 py-2 group">
            <div className="flex-grow pl-1">
              <FaChartLine className="inline  mr-2" />
              <a className=" ">Return rate</a>
            </div>
            <div className="flex-shrink text-xs pr-1 opacity-0 group-hover:opacity-100">
              <FaRegQuestionCircle />
            </div>
          </div>
        </li>
      </ul>
    </details>
  );
};

export default DropdownButton;
