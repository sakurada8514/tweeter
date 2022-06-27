export const VALIDATE_MESSAGE = {
  REQUIRED: (name: string) => `${name}は必ず入力してください`,
  EMAIL: () => "メールアドレス形式で入力してください",
  LENGTH_MAX: (size: number) => `${size}文字以内で入力してください`,
  LENGTH_MIN: (size: number) => `${size}文字以上で入力してください`,
  PASSWORD_CONFIRM: () => "パスワードが一致しません",
};
