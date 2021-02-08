function Button(props) {
  const onClick = () => {
    props.handleClick();
  };
  const type = props.type ? props.type : 'primary';
  return (
    <button onClick={onClick} className={'btn btn-' + type}>
      {props.children}
    </button>
  );
}

export default Button;
