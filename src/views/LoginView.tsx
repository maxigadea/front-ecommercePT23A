'use client'

import { login } from "@/helpers/auth.helper";
import { validateLoginForm } from "@/helpers/validate";
import { ILoginErrors, ILoginProps } from "@/types";
import { useEffect, useState } from "react"
import { useAuth } from '../context/AuthContext';
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

const LoginView = () => {
    const router = useRouter();
    const {setUserData} = useAuth();
    const initialState = {
        email: "",
        password: ""
    }

    const [dataUser, setDataUser] = useState<ILoginProps>(initialState);
    const [errors, setErrors] = useState<ILoginErrors>(initialState);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await login(dataUser);
        const {token, user} = response;
        setUserData({token, user})
        Cookies.set("token", token)
        alert("Se ha logeado correctamente")
        router.push("/")
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setDataUser({
            ...dataUser,
            [name]: value
        })
    }

    useEffect(() => {
        const errors = validateLoginForm(dataUser)
        setErrors(errors)
    }, [dataUser])


  return (
    <div>
        <h1>Login to X- Store</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email-address">Email:</label>
                <input 
                    id="email-address"
                    name="email"
                    type="email"
                    value={dataUser.email}
                    placeholder="johndoe@gmail.com"
                    onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input 
                    id="password"
                    name="password"
                    type="password"
                    value={dataUser.password}
                    placeholder="**********"
                    onChange={handleChange}
                />
                {errors.password && <span>{errors.password}</span>}
            </div>

            <button disabled={errors.email ? true : false} type="submit">Sign In</button>
        </form>
    </div>
  )
}

export default LoginView