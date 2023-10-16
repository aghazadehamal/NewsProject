import { useRoutes } from "react-router-dom";
import routers from "../routers/routers";

function GlobalProvider() {
    const RouterComponent = () => useRoutes(routers)
    return ( <RouterComponent/>);
}

export default GlobalProvider;