const App = () => {
  const [activePage, setActivePage] = useState("home");

  let content;

  if (activePage === "menu") {
    content = <Menu />;
  } else if (activePage === "about") {
    content = <About />;
  } else if (activePage === "contact") {
    content = <Contact />;
  } else if (activePage === "calculate") {
    content = <Calculator />;
  } else content = <Home />;

  return (
    <div>
      <NavBar setActivePage={setActivePage} />
      {content}
    </div>
  );
};

export default App;
