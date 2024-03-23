const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="border border-red-500 m-10 p-4">{children}</div>;
};

export default Card;
