// import { useLocation } from "react-router-dom";
// import { dp, useFlat } from "src/service";
// import { RouterHelper } from "src/service/helper";
// import useAsyncEffcet from "src/common/hooks/useAsyncEffect";
// import { ROUTE_ID } from "src/router/name";

const AuthProvider = ({ children }: React.PropsWithChildren) => {
	// const { token } = useFlat("authStore");
	// const location = useLocation();
	// useAsyncEffcet(async () => {
	// 	// 判断是否登陆
	// 	if (token) {
	// 		await dp("authStore", "getUserPermissionsAct");
	// 		const loginPath = RouterHelper.getRoutePathByKey(
	// 			ROUTE_ID.LoginPage,
	// 		);
	// 		// 判断是否是登录页
	// 		if (location.pathname === loginPath) {
	// 			RouterHelper.jumpTo(ROUTE_ID.HelloPage);
	// 		}
	// 	} else {
	// 		RouterHelper.jumpTo(ROUTE_ID.LoginPage);
	// 	}
	// }, [token]);

	return <>{children}</>;
};

export default AuthProvider;