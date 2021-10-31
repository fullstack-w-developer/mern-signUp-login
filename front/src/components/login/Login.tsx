import Input from '../Input';
import { useState } from 'react';
import { useHistory } from 'react-router';
import axios from "axios"
type loginProps = {
    userName: string,
    password: string
}
type propsLogin = {
    setFullName: any
}
const Login = ({ setFullName }:propsLogin) => {
    const [login, setLogin] = useState<loginProps>({ userName: "", password: "" })
    const handleLogin = (event: any) => {
        const { name, value } = event.target
        setLogin({
            ...login,
            [name]: value
        })
    }
    const history = useHistory()

    const data = {
        userName: login.userName,
        password: login.password
    }
    const handleSubmit = (event: any) => {
        event.preventDefault()
        axios.post("http://localhost:4000/api/v1/login", data)
            .then((res) => {
                if (res.status === 200) {
                    setFullName(res.data.user.fullName)
                    alert("ورود موفق")
                    history.push("/home")
                } else if (res.status === 403) {
                    alert("نام کاربری یا رمز عبور صحیح نمی باشد")
                } else {
                    console.log(res)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div>
            <div className="container__inputLogin">
                <h4 className="h4">برای ورد نام کاربری و رمز عبور خود را وارد کنید </h4>
                <form onSubmit={handleSubmit}>
                    <Input name="userName" value={login.userName} onChange={handleLogin} type="text" nameLabel="نام کاربری" />
                    <Input name="password" value={login.password} onChange={handleLogin} type="password" nameLabel="رمز عبور" />
                    <button type="submit" className="button">تایید</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
