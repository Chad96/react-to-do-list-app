const TASKS_KEY = "tasks";
const USER_DETAILS_KEY = "userDetails";

export const getTasksFromStorage = () => {
  const storedTasks = localStorage.getItem(TASKS_KEY);
  return storedTasks ? JSON.parse(storedTasks) : [];
};

export const saveTasksToStorage = (tasks) => {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};

export const getUserDetailsFromStorage = () => {
  const storedUserDetails = localStorage.getItem(USER_DETAILS_KEY);
  return storedUserDetails
    ? JSON.parse(storedUserDetails)
    : { name: "", email: "" };
};

export const saveUserDetailsToStorage = (userDetails) => {
  localStorage.setItem(USER_DETAILS_KEY, JSON.stringify(userDetails));
};
