export const ContentWrapper: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  return <div className="max-w-[850px] mx-auto px-5">{props.children}</div>;
};

export const UndoWrapForScroll: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  return <div className="">{props.children}</div>;
};
