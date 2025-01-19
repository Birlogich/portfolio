import { addComment } from "../../features/comments/comments-slice";
import { useDispatch, useSelector } from "react-redux";
import { Comment } from "./Comment";
import { useTheme } from "../../features/theme/use-theme";
import styles from "./comments.module.scss";

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
      <h2>Comments</h2>
      <h3>You may leave your comments below:</h3>
      <form
        onSubmit={(e) => addMessage(e)}
        className="flex flex-col mb-[25px]"
        id="commentForm"
      >
        <input
          type="text"
          placeholder="name"
          name="name"
          className={styles.input}
        ></input>
        <input
          type="text"
          placeholder="comment"
          name="mes"
          className={styles.input}
        ></input>
        <button
          className={`${styles.btn} ${theme === "dark" ? "bg-white" : ""}`}
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
