import { combineReducers } from "redux";
import GeneralConfig from "./generalConfig";
import generalConfigChange from "./generalConfigChange";

const allReducers = combineReducers({
  generalConfig: GeneralConfig,
  generalConfigChange: generalConfigChange
});
export default allReducers;
