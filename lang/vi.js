export const transValidation = {
  email_incorrect: "Email phải có dạng example@gmail.com!",
  gender_incorrect: "Ủa tại sao trường giới tính lại bị sai ?",
  password_incorrect: "Mật khẩu phải chứa 8 ký tự, bao gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt.",
  password_confirmation_incorrect: "Nhập lại mật khẩu chưa chính xác"
};

export const transErrors = {
  account_in_use: "Email này đã được sử dụng.",
  account_removed: "Tài khoản này đã bị gỡ khỏi hệ thống. Vui lòng liên hệ với bộ phận hỗ trợ",
  account_notActive: "Email này đã được đăng ký nhưng chưa Active. Vui lòng liên hệ với bộ phận hỗ trợ"
};

export const transSuccess = {
  user_created: (userEmail) => {
    return `Tài khoản <strong>${userEmail}</strong> đã được tạo. Vui lòng kiểm tra email để active tài khoản trước khi đăng nhập`
  }
}