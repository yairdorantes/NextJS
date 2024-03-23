const layout = ({
  children,
  analytics,
  chat,
  video,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  chat: React.ReactNode;
  video: React.ReactNode;
}) => {
  return (
    <div className="border border-white">
      <h1>layour dashboard </h1>
      {children}
      <section>
        <aside>{analytics}</aside>
        <aside>{chat}</aside>
        <aside>{video}</aside>
      </section>
    </div>
  );
};

export default layout;
