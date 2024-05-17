import { useState } from "react";
import { InternalPage } from "../components/InternalPage";

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <InternalPage title="Home">
        <div className="bg-white shadow-sm rounded">
          Oi
        </div>
      </InternalPage>
    </>
  );
};

export { Home };
