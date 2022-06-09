import { GET_CURRENCY } from "../Queries";

import React from "react";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";

export const GetCurrency = () => {
  const { loading, error, data } = useQuery(GET_CURRENCY);
  // if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;
  useEffect(() => {
    console.log(data);
  }, [data]);
  return <div></div>;
};
