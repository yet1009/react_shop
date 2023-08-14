import Form from "../../../components/form/Form.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from "../../../firebase.js";

const SignUp = () => {

    const navigate= useNavigate();
    const [firebaseError, setFirebaseError] = useState('');

    const auth = getAuth(app)

    const handleSignupAndLogin = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password).then(user => {
            // firebaseError
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