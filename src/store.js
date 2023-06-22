import rootdu from "./Services/Reducer/index";
import { legacy_createStore as createStore} from 'redux'
const store = createStore(rootdu);

export default store;
