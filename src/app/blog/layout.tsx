const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>blog header</header>
      <main>
        <section>{children}</section>
        <aside>
          <form action="">
            <input type="search" />
            <button type="submit">send</button>
          </form>
        </aside>
      </main>
      <footer>blogs footer</footer>
    </>
  );
};

export default layout;
