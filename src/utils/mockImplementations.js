export const returnsPromise = () => {
  return Promise.resolve({
    json: () => Promise.resolve({ data: 'data' }),
  });
};