export const goToFeedPage = (navigate) => {
  navigate("");
};
export const goToLoginPage = (navigate) => {
  navigate("/login");
};
export const goToSignupPage = (navigate) => {
  navigate("/signup");
};
export const goToAddRecipePage = (navigate) => {
  navigate("/add");
};
export const goToRecipeDetailPage = (navigate, id) => {
  navigate(`/detail/${id}`);
};
