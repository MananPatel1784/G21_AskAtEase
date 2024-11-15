import React from "react";
import WidgetContent from "./WidgetContent.jsx";

function Widget() {
  return (
    <div className="widget">
      <div className="widgetHeader">
        <h5 className="text-gray font-bold">Spaces to follow</h5>
      </div>
      <div className="widgetContents">
        <WidgetContent />
      </div>
    </div>
  );
}

export default Widget;
