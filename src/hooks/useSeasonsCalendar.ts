import { useCallback, useEffect, useState } from "react";
import { getSeasonCalendar } from "../api/Api";
import { ICalendar } from "../types/index.dto";

const useSeasonsCalendar = (page: number) => {
  const [data, setData] = useState<null | ICalendar[]>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pages, setPages] = useState(0);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getSeasonCalendar(10, page);
      if (res.data) {
        setData(res.data.items);
        setPages(Math.ceil(res.data.total / 10));
      }
    } catch (e) {
      setError(e as string);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    getData();
  }, [page, getData]);

  return { isLoading, data, pages, error };
};

export default useSeasonsCalendar;
