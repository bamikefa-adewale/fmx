import React, { useState } from "react";
import { statusLinks } from "../constanct/OrderStastusLink";

const OrderStatus = () => {
  const [activePath, setActivePath] = useState("/all");
  return (
    <div className="py-3 overflow-x-auto">
      <div className="flex gap-10  border-b  min-w-[600px] w-full">
        {statusLinks.map((status) => (
          <div
            key={status.path}
            className={`flex items-center gap-5 cursor-pointer ${
              activePath === status.path ? "border-b border-black py-5" : ""
            }`}
            onClick={() => setActivePath(status.path)}
          >
            <p>{status.name}</p>
            <span
              className="rounded-lg p-1 text-white "
              style={{ backgroundColor: status.color }}
            >
              20
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStatus;
