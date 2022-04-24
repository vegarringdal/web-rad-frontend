import { getDataControllerByName, GridControllerButtons, SimpleHtmlGrid } from "@rad-tools";
import React from "react";

export function AccessRole() {
    const controllerName = "WEB_ROLE";

    const gridInterface = getDataControllerByName(controllerName).gridInterface;
    return (
        <div className="flex flex-row h-full mt-2 w-full">
            <div className="flex flex-col m-2">
                <GridControllerButtons dataSet={controllerName} />
            </div>
            <SimpleHtmlGrid className="simple-html-grid flex-grow m-3 mb-5" interface={gridInterface}></SimpleHtmlGrid>
        </div>
    );
}