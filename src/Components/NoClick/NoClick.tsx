import "./NoClick.scss";

interface INoClick {
  content: string;
  color: string;
  main?: boolean;
  onClick?: () => void;
}

export const NoClick = ({ content, color, main, onClick }: INoClick) => {
  return (
    <>
      <div style={{ backgroundColor: color }} onClick={onClick} className={"noclick " + (main ? "main" : "")}>
        {content?.toUpperCase()}
      </div>
    </>
  );
};
