import { useState } from 'react';
import { useHistory } from 'react-router';
import Input from '../Input';
import axios from "axios"
type signUpTypes = {
    fullName: string
    userName: string
    email: string
    password: string
    repeatPassword: string,
    age: number
}
const SignUp = () => {

    const [signUp, setSignUp] = useState<signUpTypes>({
        fullName: "",
        userName: "",
        email: "",
        password: "",
        repeatPassword: "",
        age: 0
    })

    const history = useHistory()

    // onChange input
    const handleOnChange = (event: any) => {
        const { name, value } = event.target

        setSignUp({
            ...signUp,
            [name]: value
        })
    }

    // validation
    const validton = () => {
        if (!signUp.fullName) {
            alert("لطفا نام و نام خاوادگی خود را وارد کنید")
            return false
        } else if (signUp.password !== signUp.repeatPassword) {
            alert("رمز با تکرار ان مطابقت ندارد");
            return false
        }
        return true
    }

    // data for send request
    const data = {
        fullName: signUp.fullName,
        userName: signUp.userName,
        email: signUp.email,
        password: signUp.password,
        age: signUp.age
    }
    const handleSubmitSignUp = (event: any) => {
        event.preventDefault()
        const validate = validton()
        if (validate) {
            axios.post("https://signup-login-practice.herokuapp.com/api/v1/signUp", data)
                .then((res) => {
                    if (res.status === 201) {
                        alert("اطلاعات شما با موفقیت ثبت شد")
                        history.push("/login")

                    } else {
                        alert("مشکل در ثبت نام به وجود امده است")
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    return (
        <div>
            <div className="container__inputLogin ">
                <h4 className="h4">برای ثبت نام، لطفا فرم زیر را پر کنید</h4>
                <form onSubmit={handleSubmitSignUp}>
                    <Input type="text" name="fullName" value={signUp.fullName} onChange={handleOnChange} nameLabel="نام و نام خانوادگی" />
                    <Input type="email" name="email" value={signUp.email} onChange={handleOnChange} nameLabel="ایمیل" />
                    <Input type="text" name="userName" value={signUp.userName} onChange={handleOnChange} nameLabel="نام کاربری" />
                    <Input type="password" name="password" value={signUp.password} onChange={handleOnChange} nameLabel="رمز عبور" />
                    <Input type="password" name="repeatPassword" value={signUp.repeatPassword} onChange={handleOnChange} nameLabel="تکرار رمز عبور" />
                    <Input type="number" name="age" value={signUp.age} onChange={handleOnChange} nameLabel="سن" />
                    <button type="submit" className="button" >تایید</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
