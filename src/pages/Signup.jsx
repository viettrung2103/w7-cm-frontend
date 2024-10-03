import useField from "../hooks/useField";
import useSignup from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/server";

const Signup = () => {
  const navigate = useNavigate();
  const name = useField("text");
  const userName = useField("text");
  const password = useField("password");
  const phoneNumber = useField("text");
  const gender = useField("text");
  const dateOfBirth = useField("date");
  const membershipStatus = useField("text");
  const address = useField("text");
  const profilePicture = useField("text");

  const { signup, error } = useSignup(`${API_URL}/api/users/signup`);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await signup({
      name: name.value,
      username: userName.value,
      password: password.value,
      phone_number: phoneNumber.value,
      gender: gender.value,
      date_of_birth: dateOfBirth.value,
      membership_status: membershipStatus.value,
      address: address.value,
      profile_picture: profilePicture.value,
    });
    if (!error) {
      console.log("success");
      navigate("/");
    }
  };

  return (
    <div className="create">
      <h2>Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input {...name} />
        <label>User name:</label>
        <input {...userName} />
        <label>Password:</label>
        <input {...password} />
        <label>Phone Number:</label>
        <input {...phoneNumber} />
        <label>Gender:</label>
        <select {...gender}>
          <option value="" disabled>
            Select gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <label>Date of Birth:</label>
        <input {...dateOfBirth} />
        <label>Membership Status:</label>
        <select {...membershipStatus}>
          <option value="" disabled>
            Select membership status
          </option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <label>Address:</label>
        <input {...address} />
        <label>Profile Picture:</label>
        <input {...profilePicture} />
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
