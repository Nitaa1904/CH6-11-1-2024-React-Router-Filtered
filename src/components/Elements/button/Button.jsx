function Button(props) {
  const { children = "click me", onSelect = () => {} } = props;
  return <button onClick={onSelect}>{children}</button>;
}

export default Button;
