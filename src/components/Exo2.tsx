import { ReactNode } from "react";

interface LabelProps {
  htmlFor: string;
  children: ReactNode;
}

const Label = ({ htmlFor, children }: LabelProps) => (
  <label htmlFor={htmlFor} className="block text-sm font-bold mb-2">
    {children}
  </label>
);

interface RadioInputProps {
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  children: ReactNode;
}

const RadioInput = ({
  id,
  name,
  value,
  checked,
  children
}: RadioInputProps) => (
  <div className="flex items-center mb-4">
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      htmlFor={id}
      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      {children}
    </label>
  </div>
);

interface InputProps {
  id: string;
  name: string;
  type: string;
}

const Input = ({ id, name, type }: InputProps) => (
  <input
    id={id}
    name={name}
    type={type}
    className="shadow appearance-none border rounded py-2 px-3"
  />
);

const DivContainer = ({ children }: { children: ReactNode }) => (
  <div className="mb-2">{children}</div>
);

function Exo2() {
  return (
    <>
      <h1>Formulaire de recherche</h1>
      <form
        action="/search"
        method="get"
        className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <DivContainer>
          <Label htmlFor="name">Nom :</Label>
          <Input id="name" name="name" type="text" />
        </DivContainer>
        <DivContainer>
          <Label htmlFor="music">Genre musical préféré :</Label>
          <select
            id="music"
            name="music"
            className="block appearance-none w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="jazz">Jazz</option>
            <option value="classic">Classique</option>
            <option value="rap">Rap</option>
          </select>
        </DivContainer>
        <fieldset className="">
          <legend className="my-2">Préférence de voyage :</legend>
          <RadioInput id="swiss" name="best-travel" value="swiss" checked>
            Swiss
          </RadioInput>
          <RadioInput id="england" name="best-travel" value="england">
            England
          </RadioInput>
        </fieldset>
        <DivContainer>
          <Label htmlFor="best-dish">Plat préféré :</Label>
          <Input id="best-dish" name="best-dish" type="text" />
        </DivContainer>
        <DivContainer>
          <label className="md:w-2/3 block font-bold">
            <input
              id="conditions"
              className="mr-2 leading-tight"
              type="checkbox"
            />
            <span className="text-sm">
              J'accepte les conditions d'utilisation
            </span>
          </label>

          <a
            href="/conditions.html"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            Lire les conditions d'utilisation
          </a>
        </DivContainer>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Rechercher
        </button>
      </form>
    </>
  );
}

export default Exo2;
