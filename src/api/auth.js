import { supabase } from "../supabaseClient";

// Register User (General)
export const register = async (name, email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
    },
  });

  if (error) throw error;
  console.log("Auth Success:", data.user);
  return data.user;
};

// Register Recruiter & Save in Database
export const registerRecruiter = async (name, email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
    },
  });

  if (error) throw error;
  console.log("Auth Success:", data.user);
  // Save additional recruiter data in 'recruiters' table
  await supabase.from("recruiters").insert([{ id: data.user.id, email, name }]);
  console.log("Recruiter saved successfully in DB:", data.user.email);
  return data.user;
};

// Login User
export const login = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    console.error("Login Error:", error.message);
    throw error;
  }

  return data.user;
};

// Get Logged-in User
export const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) return null;
  return data.user;
};

// Logout User
export const logout = async () => {
  await supabase.auth.signOut();
};

export const resendVerificationEmail = async (email) => {
    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
    });
  
    if (error) throw error;
    console.log("Verification email sent successfully!");
  };
