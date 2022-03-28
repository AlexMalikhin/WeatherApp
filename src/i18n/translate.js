import {FormattedMessage} from "react-intl";

export const translate = (id, key) => {
    return (<FormattedMessage id={key ? `${id}.${key}` : `${id}` }/>)
}
