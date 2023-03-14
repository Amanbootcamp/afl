import axios from "axios";
import { ISeasonCalendar } from "../types/index.dto";

const api = axios.create({
  baseURL: "https://footballista.ru/api/",
});


export const getSeasonCalendar = (limit: number = 10, offset: number = 0) =>
  api.get<ISeasonCalendar>(
    `seasons/5099/calendar_paginated?limit=${limit}&offset=${offset}`
  );
