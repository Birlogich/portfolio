import { RxAvatar } from "react-icons/rx";
import { useTheme } from "../../features/theme/use-theme";

export const Comment = (com) => {
  const [theme] = useTheme();
  return (
    <div className="flex flex-col w-full border-b-[1px] border-solid border-section-subtitle-color pb-[10px] mb-[10px] items-center">
      <div className="flex w-full justify-start items-center mb-[20px]">
        <RxAvatar
          className="w-[30px] mr-[20px]"
          color={theme === "dark" ? "white" : "black"}
        />
        <p className="text-general text-card-title-color flex-auto font-bold">
          {com?.name}
        </p>
      </div>
      <div className="w-full justify-start">
        <p className="text-general text-section-subtitle-color mb-[12px] flex-auto">
          - {com?.mes}
        </p>
      </div>
    </div>
  );
};
