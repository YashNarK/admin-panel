import dayjs from "dayjs";

type TDateFormat = {
  inputDate: string;
  format: "MMM DD, YYYY" | "YYYY-MM-DD" | "DD, MMM";
};

function formatDate({ inputDate, format }: TDateFormat) {
  // Parse input string using dayjs
  const date = dayjs(inputDate);

  // Format date to get day and month in desired format
  const formattedDate = date.format(format);

  return formattedDate;
}
export default formatDate;
