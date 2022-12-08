import React, { FC } from "react";
import moment from "moment";
interface DateProps {
  date: Date;
  format?: string;
}

export const Date: FC<DateProps> = ({ date, format = "MMM Do YY" }) => {
  return <>{moment(date).format(format)}</>;
};

export default Date;
