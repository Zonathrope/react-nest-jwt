import React from 'react';
import Input from "../../../UI/Input/Input";
import styles from "../Auth.styles.module.css"

const Login = () => {
    return (
        <div className={styles.wrapper}>
            <Input name={"Login"}/>
            <Input name={"Password"}/>
        </div>
    );
};

export default Login;