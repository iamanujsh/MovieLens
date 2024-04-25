// @ts-nocheck

import { useContext } from "react";
import { AdultContext } from "@/contexts/adult.context";
import { Switch } from "./ui/switch";

const Adult = () => {
  const { isAdult, setIsAdult } = useContext(AdultContext);

  return <Switch onClick={() => setIsAdult(!isAdult)} id="airplane-mode" />;
};

export default Adult;
