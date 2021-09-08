import Utils from '../../utilities/utils'

const DOMAIN = Utils.getDomain()
const VERSION_API = Utils.getPrefixVersionAPI()

//Server Path

export default Object.freeze({
    example_url: `${DOMAIN}/${VERSION_API}`,
})
