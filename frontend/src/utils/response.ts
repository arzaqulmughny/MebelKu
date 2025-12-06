export const formatResponseError = (errors: Record<string, string[]>) => {
  const result = {};

  Object.entries(errors).forEach(([field, messages]) => {
        (result as Record<string, string>)[field] = messages[0];
  });

  return result;
};
