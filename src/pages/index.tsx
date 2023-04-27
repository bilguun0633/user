interface MainProps {
  page: string;
}

const Main: React.FC<MainProps> = ({ page }) => {
  switch (page) {
    case "agents":
      return <h1>Agents Page</h1>;
    case "freelancer":
      return <h1>Freelancer Page</h1>;
    case "templates":
      return <h1>Templates Page</h1>;
    default:
      return <h1>Home Page</h1>;
  }
};

export default Main;
