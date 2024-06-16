import React, { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <section className="w-full">
      <div className="h-screen flex items-center justify-center">{children}</div>
    </section>
  );
};

export default AuthLayout;
