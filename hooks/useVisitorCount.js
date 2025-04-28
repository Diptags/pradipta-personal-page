import { useEffect } from "react";

// TODO: Handle Backend API for counting the visitor amount
export const useVisitorCount = (page = "", param = "") => {
  const trackVisitor = async source => {
    try {
      const res = await fetch(
        `/api/visitor-count?pageVisited=${page}&source=${source || "unknown"}`
      );
      const jsonData = await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!param.includes("?visitor=pradipta")) {
      const queryParam = new URLSearchParams(param.slice(1));
      const source = queryParam.get("source");
      trackVisitor(source);
    }
  }, []);
};
