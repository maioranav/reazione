import "./NoClick.scss";

interface INoClick {
  content: string;
  color: string;
  main?: boolean;
}

export const NoClick = ({ content, color, main }: INoClick) => {
  return (
    <>
      <div style={{ backgroundColor: color }} className={"noclick " + (main ? "main" : "")}>
        {content?.toUpperCase()}
      </div>
    </>
  );
};
