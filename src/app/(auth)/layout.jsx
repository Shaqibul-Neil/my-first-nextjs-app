const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen gap-5">
      <div className="flex-2">{children}</div>
      <div className="flex-1">
        <h2 className="text-4xl font-bold">Welcome for authentication</h2>
      </div>
    </div>
  );
};

export default AuthLayout;
