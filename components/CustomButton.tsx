import { CustomButtonProps } from "@/types";

const CustomButton = ({ title, containerStyles, handleClick, btnType }: CustomButtonProps) => (
  <button
    disabled={false}
    type="button"
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className="flex-1">
      {title}
    </span>
  </button>
);

export default CustomButton;
