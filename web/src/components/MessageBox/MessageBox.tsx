import React from "react";
import { Toaster } from "sonner";

import "./MessageBox.css";

const MessageBox = () => {
   return (
      <Toaster
         toastOptions={{
            className: "toast",
         }}
      />
   );
};

export default MessageBox;
