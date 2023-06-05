import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const SearchForm = ({ handleApiTrigger }) => {
  const [userName, setUsername] = useState("");
  const [error, setError] = useState(false);

  const handleOnChange = ({ currentTarget }) => {
    setUsername(currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!userName) {
      setError(true);
    } else {
      setError(false);
      // trigger API request
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter GitHub username"
          value={userName}
          onChange={handleOnChange}
        />
        {error && (
          <Form.Text className="text-danger">
            Please enter a valid GitHub Username.
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3 text-center">
        <Button variant="success" type="submit">
          Search
        </Button>
      </Form.Group>
    </Form>
  );
};
