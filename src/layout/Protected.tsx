import { Header } from "../components/Header";

interface IProps {
  element: React.ReactElement;
}

const Protected: React.FC<IProps> = ({ element }) => {
  return (
    <div className="min-h-full">
      <Header />

      {element}
    </div>
  );
};

export { Protected };
