import clsx from "clsx";
import { FC } from "react";
import { Formik } from "../../../types/formik";

interface Props {
  name: string;
  placeholder?: string;
  id: string;
  formik: Formik;
  classes: string;
}

export const TextInput: FC<Props> = ({ name, id, placeholder = "", formik, classes }: Props) => (
  <input
    name={name}
    type="text"
    id={id}
    className={clsx("input w-full input-bordered", classes)}
    placeholder={placeholder}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  />
);
