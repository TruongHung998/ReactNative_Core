import {requestApi} from "../../index";
import ServerPath from "../ServerPath";
import NetworkUtils from "../net/NetworkUtils";
import Utils from "../../../utilities/utils";

const DOMAIN = Utils.getDomain()

export const getApiExample = () => {
    return requestApi(NetworkUtils.get, null, ServerPath.example_url, null)
}
