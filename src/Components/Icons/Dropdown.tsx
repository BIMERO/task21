import { CSSProperties, SVGProps } from "react";

export const DropdownIcon = (props: SVGProps<SVGSVGElement>) => {
  const { fill, ...rest } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...rest}>
    <path d="M16 10L12 14L8 10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill={fill}/>
  </svg>
  );
};