import { createContext } from "react";

const BotaoContext = createContext<
  { isSubmitting: boolean; isValid: boolean } | undefined
>(undefined);
export { BotaoContext };
