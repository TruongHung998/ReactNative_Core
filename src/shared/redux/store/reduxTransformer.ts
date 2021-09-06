import {createTransform} from "redux-persist";
import {authStateFromJs, authStateToJs} from "../reducers/appReducer";

const appTransformer = createTransform(
    (inboundState: any, key) => {
        switch (key) {
            case 'app':
                return authStateToJs(inboundState)
        }
        return inboundState
    },
    (outboundState, key) => {
        switch (key) {
            case 'app':
                return authStateFromJs(outboundState)
        }
        return outboundState
    }
);
export default appTransformer
