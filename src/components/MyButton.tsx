interface Props {
  children:string,
  color?: 'primary'|'secondary'|'warning'|'danger';
  onClick: () => void;
}

const MyButton = ({ children,color='danger', onClick }: Props) => {
  return (
    <div>
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default MyButton;
