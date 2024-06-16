"use client";
import { PropsWithChildren } from "react";
import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import AuthHeader from "./AuthHeader";
import BackButton from "./BackButton";

interface CardWrapperProps extends PropsWithChildren {
  label: string;
  title: string;
  backButtonHref: string;
  backButtonLabel: string;
}

const CardWrapper = ({ label, title, backButtonHref, backButtonLabel, children }: CardWrapperProps) => {
  return (
    <Card className="xl:w-1/4 md:w-1/2 shadow-md ">
      <CardHeader>
        <AuthHeader label={label} title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
