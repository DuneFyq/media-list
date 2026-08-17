const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

interface ValidationResult {
  success: boolean;
  message: string;
}

export function validateEmail(email: string): ValidationResult {
  if (!email) {
    return { success: false, message: "Email is required" };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { success: false, message: "Invalid email format" };
  }

  return { success: true, message: "Email is correct" };
}

export function validatePassword(password: string): ValidationResult {
  if (!password) {
    return { success: false, message: "Password is required" };
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    return {
      success: false,
      message: `Password must be at least ${MIN_PASSWORD_LENGTH} characters`,
    };
  }

  return { success: true, message: "Password is valid" };
}

export function validatePasswordConfirmation(
  password: string,
  confirmation: string,
): ValidationResult {
  if (!confirmation) {
    return { success: false, message: "Password confirmation is required" };
  }

  if (password !== confirmation) {
    return { success: false, message: "Passwords do not match" };
  }

  return { success: true, message: "Passwords match" };
}
