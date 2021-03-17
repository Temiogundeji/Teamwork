export const catchApiRequestError = (error) => {
    return error;
  };
  export const handleApiResponseError = (response) => {
    if (response.message) {
      return response.message;
    } else if (response.error) {
      return response.error;
    }
  };
  