import Form from "../../../components/form/Form.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from "../../../firebase.js";
import {setUser} from "../../../store/user/user.slice.js";
import {useDispatch} from "react-redux";

const SignUp = () => {

    const navigate= useNavigate();
    const [firebaseError, setFirebaseError] = useState('');

    const dispatch = useDispatch()
    const auth = getAuth(app)

    const handleSignupAndLogin = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
            // firebaseError
            dispatch(setUser({
                email: userCredential.user.email,
                token: userCredential.user.refreshToken,
                id: userCredential.user.uid
            }))
            navigate('/');
        }).catch(err => {
            return err && setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다.")
        })
    }

    return (
        <Form title={'가입하기'}
              getDataForm={handleSignupAndLogin}
              firebaseError={firebaseError}
        />
    )
}

export default SignUp;