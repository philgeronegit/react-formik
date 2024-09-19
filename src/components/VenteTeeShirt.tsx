import DivContainer from "./form/DivContainer";
import Input from "./form/Input";
import Label from "./form/Label";
import Fieldset from "./form/Fieldset";
import Spacer from "./form/Spacer";
import SubmitButton from "./form/SubmitButton";

import { useFormik } from "formik";
import Button from "./form/Button";

interface FormValues {
  name: string;
  address: string;
  postalCode: string;
  country: string;
  model: string;
  size: string;
  quantity: number;
}
type OptionalFormValues = Partial<FormValues>;

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values: FormValues) => {
  console.log("values", values);
  const errors: OptionalFormValues = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (!/[A-Z]/.test(values.name)) {
    errors.name = "Doit être en majuscule";
  }

  if (!values.address) {
    errors.address = "Required";
  }

  if (!values.postalCode) {
    errors.postalCode = "Required";
  } else if (!/[0-9]{5}$/i.test(values.postalCode)) {
    errors.postalCode = "Code postal invalide";
  }

  return errors;
};

const Error = ({ error }: { error?: string }) => (
  <>{error ? <div className="text-red-500">{error}</div> : null}</>
);

function VenteTeeShirt() {
  const initialValues: FormValues = {
    name: "",
    address: "",
    postalCode: "",
    country: "France",
    model: "Road 66",
    size: "6",
    quantity: 1
  };
  const formik = useFormik({
    validateOnMount: true,
    initialValues: initialValues,
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        action="/search"
        method="get"
        className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Fieldset legend="Client">
          <DivContainer>
            <Label htmlFor="name">Nom et prénom :</Label>
            <Input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Nom et prénom"
            />

            <Error error={formik.errors.name} />
          </DivContainer>
          <DivContainer>
            <Label htmlFor="address">Adresse :</Label>
            <Input
              id="address"
              name="address"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
            />

            <Error error={formik.errors.address} />
          </DivContainer>
          <DivContainer>
            <Label htmlFor="postalCode">Code postal :</Label>
            <Input
              id="postalCode"
              name="postalCode"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.postalCode}
            />

            <Error error={formik.errors.postalCode} />
          </DivContainer>
          <DivContainer>
            <Label htmlFor="country">Pays :</Label>
            <Input
              id="country"
              name="country"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
              disabled
            />

            <Error error={formik.errors.country} />
          </DivContainer>
        </Fieldset>

        <Fieldset legend="Commande">
          <DivContainer>
            <Label htmlFor="model">Modèle :</Label>
            <Input
              id="model"
              name="model"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.model}
            />

            <Error error={formik.errors.model} />
          </DivContainer>
          <DivContainer>
            <Label htmlFor="size">Taille :</Label>
            <input
              id="size"
              type="range"
              list="sizes"
              className="bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.size}
            />
            <datalist
              id="sizes"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "1rem"
              }}>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </datalist>
          </DivContainer>
          <DivContainer>
            <Label htmlFor="quantity">Quantité :</Label>
            <Input
              id="quantity"
              name="quantity"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.quantity}
              min={1}
              max={165}
              step={3}
            />

            <Error error={formik.errors.quantity} />
          </DivContainer>
        </Fieldset>

        <Spacer />

        <section className="flex justify-center gap-2">
          <SubmitButton label="Rechercher" disabled={!formik.isValid} />
          <Button onClick={() => formik.resetForm()}>Recommencer</Button>
        </section>
      </form>
    </>
  );
}

export default VenteTeeShirt;
