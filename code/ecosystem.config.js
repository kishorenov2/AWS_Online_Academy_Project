module.exports = {
  apps: [
    {
      name: "app",
      script: "bun run start:ec2",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
