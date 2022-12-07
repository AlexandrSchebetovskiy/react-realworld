import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { FC, PropsWithChildren, ReactNode, useEffect } from "react";

const AuthenticatedRoute: FC<PropsWithChildren> = ({
  children,
}): ReactNode | any => {
  const auth = useAppSelector((state) => state.auth);

  if (!auth.isLoading) return !auth.user ? children : <Navigate to="/feed" />;
};
export default AuthenticatedRoute;
