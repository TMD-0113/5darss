import { useContext } from "react";
import GlobalContext from "../context/globalContext";

export function useGlobalContext() {
  const ctx = useContext(GlobalContext);
  if (!ctx) throw new Error("Must be inside GlobalProvider");
  return ctx;
}
