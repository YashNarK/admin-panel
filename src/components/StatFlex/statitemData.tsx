import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IStatItem } from "../../interfaces";

export const statItemList: IStatItem[] = [
  {
    title: "Online store sessions",
    icon: <FaCaretUp className="inline" />,
    isSelected: true,
    isIncreased: true,
    value: "255,581",
    percentageDifference: "9%",
    description: "Your online store's traffic volume, shown in sessions",
  },
  {
    title: "Net return value",
    icon: <FaCaretUp className="inline" />,
    isSelected: false,
    isIncreased: true,
    value: "-$15,07.44",
    percentageDifference: "14%",
    description: "Your Net return value after tax",
  },
  {
    title: "Total orders",
    icon: <FaCaretDown className="inline" />,
    isSelected: false,
    isIncreased: false,
    value: "10,511",
    percentageDifference: "2%",
    description: "Your total number of orders over the selected duration",
  },
  {
    title: "Conversion rate",
    icon: <FaCaretDown className="inline" />,
    isSelected: false,
    isIncreased: false,
    value: "3.18%",
    percentageDifference: "7%",
    description: "The rate of conversion as per today's forex data"
  },
];
