// src/api/appointmentsService.js
import api from "./axios";

export const setSchedule = (schedule) =>
  api.post("/api/appointments/schedule", schedule);
export const getSchedule = () => api.get("/api/appointments/schedule");
export const reserveAppointment = (data) =>
  api.post("/api/appointments/reserve", data);
export const getReservations = () => api.get("/api/appointments/reservations");
export const getDoctorReservations = () =>
  api.get("/api/appointments/doctor-reservations");
