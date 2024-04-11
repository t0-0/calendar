import { FC, ReactNode, MouseEventHandler } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isIgnoreHover?: boolean;
}

const Button: FC<Props> = ({
  children,
  className,
  onClick,
  isIgnoreHover = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center text-center justify-center border aspect-square",
        { "hover:bg-gray-100": !isIgnoreHover },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
