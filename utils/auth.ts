import supabase from "../lib/supabase";

export const checkUserSession = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (user) {
    return user;
  } else {
    return null;
  }
};

export const signOut = async () => {
  await supabase.auth.signOut();
};
