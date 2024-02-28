import BaseView from "./BaseView";

import LoginForm from "../components/LoginForm/LoginForm";
function LoginView(){
    return <BaseView>
        <LoginForm />
    </BaseView>
}

export default LoginView;