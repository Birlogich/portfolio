import { addComment } from "../../features/comments/comments-slice";
import { useDispatch, useSelector } from "react-redux";
import { Comment } from "./Comment";
import { useTheme } from "../../features/theme/use-theme";

export const Comments = () => {
  const dispatch = useDispatch();
  const [theme] = useTheme();
  const { comments } = useSelector((state) => state.comment);

  const addMessage = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const mes = e.target.mes.value;
    dispatch(addComment({ name, mes }));
    e.target.reset();
  };

  return (
    <div className="flex flex-col mb-[100px] sm:mb-[50px]">
      <h2 className="text-section-title-color text-section-title font-bold mb-[25px] sm:text-[35px]">
        Comments
      </h2>
      <p className="mb-[50px] text-ordinary text-section-subtitle sm:mb-[25px] sm:text-[25px]">
        You may leave your comments below:
      </p>
      <form
        onSubmit={(e) => addMessage(e)}
        className="flex flex-col mb-[25px]"
        id="commentForm"
      >
        <input
          type="text"
          placeholder="name"
          name="name"
          className="border-text-link-color border-[1px] border-solid p-[10px] rounded-lg mb-[20px] text-general text-section-subtitle-color"
        ></input>
        <input
          type="text"
          placeholder="comment"
          name="mes"
          className="border-text-link-color border-[1px] border-solid p-[10px] rounded-lg mb-[20px] text-general text-section-subtitle-color"
        ></input>
        <button
          className={`
        ${theme === "dark" ? "bg-white" : ""}
        flex flex-col border-black border-[1px] border-solid p-[10px] rounded-lg max-w-[100px] items-center justify-center`}
        >
          Submit
        </button>
      </form>
      {comments?.length === 1 && (
        <div className="flex flex-col">
          {comments?.slice(0, 1).map((com, index) => {
            return <Comment {...com} key={index} />;
          })}
        </div>
      )}
      {comments?.length > 1 && (
        <div className="flex flex-col">
          {comments?.map((com, index) => {
            return <Comment {...com} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};
