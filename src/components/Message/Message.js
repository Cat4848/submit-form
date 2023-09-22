import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

export default function Message({ success }) {
  const [isSuccess, setIsSuccess] = useState(success ? true : false);

  useEffect(() => {
    if (success) {
      setIsSuccess(true);
      const timeOutId = setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
      return () => clearTimeout(timeOutId);
    }
  }, [success]);

  const successTemplate = (
    <Alert show={isSuccess} variant="success">
      <Alert.Heading>Success</Alert.Heading>
      <p>{success}</p>
    </Alert>
  );

  return (
    <h6>
      {isSuccess && successTemplate}
    </h6>
  );
}