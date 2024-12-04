import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner/Spinner"; // Assuming you have a Spinner component
import { validateLogin } from "../../api/login";
import cookies from "js-cookie";

const ProtectedRoutesWrapper = () => {
  const jwt_token = cookies.get("jwt_token");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  useEffect(() => {
    if (!jwt_token) {
      setIsValid(false);
      return;
    }

    const validate = async () => {
      const response = await validateLogin();

      // @ts-expect-error todo later
      setIsValid(response.status === 200);
    };

    validate();
  }, [jwt_token]);

  if (isValid === null) {
    return <Spinner />; // Show a loading spinner while validating
  }

  if (!isValid) {
    return <Navigate to="/login" />; // Redirect to login if validation fails
  }

  return <Outlet />;
};

export default ProtectedRoutesWrapper;
