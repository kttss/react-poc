function Button(props) {
  const onClick = () => {
    props.handleClick();
  };
  return <button onClick={onClick}>{props.children}</button>;
}

export default Button;
