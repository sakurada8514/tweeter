import { useMemo, useState } from "react";
import * as Yup from "yup";
import { VALIDATE_MESSAGE } from "../../libs/errorMessage";
import { useFormik } from "formik";
import clsx from "clsx";
import { ValidationErrorMessage } from "../parts/form/ValidationErrorMessage";
import { TextInput } from "../parts/form/TextInput";

const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  type SignUpFormValue = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  const initialValues = useMemo(
    () =>
      ({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      } as SignUpFormValue),
    []
  );

  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        name: Yup.string().max(64, VALIDATE_MESSAGE.LENGTH_MAX(64)).required(VALIDATE_MESSAGE.REQUIRED("名前")),
        email: Yup.string().email(VALIDATE_MESSAGE.EMAIL).max(256, VALIDATE_MESSAGE.LENGTH_MAX(256)).required(VALIDATE_MESSAGE.REQUIRED("メールアドレス")),
        password: Yup.string()
          .min(8, VALIDATE_MESSAGE.LENGTH_MIN(8))
          .max(256, VALIDATE_MESSAGE.LENGTH_MAX(256))
          .required(VALIDATE_MESSAGE.REQUIRED("パスワード")),
        password_confirmation: Yup.string()
          .required(VALIDATE_MESSAGE.REQUIRED("パスワード確認"))
          .oneOf([Yup.ref("password"), null], VALIDATE_MESSAGE.PASSWORD_CONFIRM),
      }),
    []
  );
  const handleSubmit = async (values: SignUpFormValue) => {
    setIsLoading(true);
    // await doSginUp(toUserSignUpRequest(values));
    console.log(values);

    setIsLoading(false);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validateOnMount: true,
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full flex items-center flex-col border-2 border-gray-300 rounded-xl p-10 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold">Tweeterにサインアップ</h1>
        <form onSubmit={formik.handleSubmit} className="w-full flex flex-col items-center">
          <TextInput name="name" id="name" placeholder="name" formik={formik} classes="max-w-xs mt-8" />
          <ValidationErrorMessage touched={formik.touched.name} error={formik.errors.name} />

          <TextInput name="email" id="email" placeholder="email" formik={formik} classes="max-w-xs mt-4" />
          <ValidationErrorMessage touched={formik.touched.email} error={formik.errors.email} />

          <TextInput name="password" id="password" placeholder="password" formik={formik} classes="max-w-xs mt-4" />
          <ValidationErrorMessage touched={formik.touched.password} error={formik.errors.password} />

          <TextInput name="password_confirmation" id="password_confirmation" placeholder="password_confirmation" formik={formik} classes="max-w-xs mt-4" />
          <ValidationErrorMessage touched={formik.touched.password_confirmation} error={formik.errors.password_confirmation} />

          <button type="submit" className={clsx("btn btn-primary w-full max-w-xs mt-6", isLoading && "loading")}>
            Button
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignUpPage;
