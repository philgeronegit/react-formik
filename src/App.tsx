import { useState } from "react";
import "./App.css";
import Planning from "./components/Planning";
import VenteTeeShirt from "./components/VenteTeeShirt";
import NavBar from "./components/NavBar";

const components = [
  {
    name: "Vente de tee-shirt",
    Component: VenteTeeShirt
  },
  {
    name: "Planning",
    Component: Planning
  }
];

function App() {
  const [component, setComponent] = useState(0);
  const Component = components[component].Component;

  return (
    <>
      <NavBar>
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {components.map(({ name }, index) => (
            <li key={index}>
              <a
                href="#"
                className="block py-2 px-3 rounded "
                aria-current="page"
                onClick={() => setComponent(index)}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </NavBar>

      <div className="card">
        <Component />
      </div>
    </>
  );
}

export default App;
