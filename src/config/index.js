const config = {
  get DB_URL() {
    return process.env.DB_PATH;
  },
};

export { config };
