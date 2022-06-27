import { FC } from "react";

interface Props {
  touched: boolean | undefined;
  error: string | undefined;
}
export const ValidationErrorMessage: FC<Props> = ({ touched, error }: Props) => (
  <div>{touched && error ? <p className="mt-1 text-sm text-red-500">{error}</p> : null}</div>
);
