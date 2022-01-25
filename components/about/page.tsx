import { VoidFunctionComponent } from "react";

export interface AboutPageArgs {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
}

export const AboutPage: VoidFunctionComponent<AboutPageArgs> = ({
  children,
  className,
}) => {
  return (
    <div
      className={className + " justify-center items-center p-5 min-w-screen"}
    >
      {children}
    </div>
  );
};
