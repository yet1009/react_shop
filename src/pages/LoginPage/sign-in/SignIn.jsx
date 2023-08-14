import Form from "../../../components/form/Form.jsx";
import {useNavigate} from "react-router-dom";
import app from "../../../firebase.js";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useState} from "react";


const SignIn = () => {

    const navigate = useNavigate()
    const [firebaseError, setFirebaseError] = useState('');

    const auth = getAuth(app);
    const handleLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password).then(user => {
            navigate('/')
        }).catch(err => {
            return err && setFirebaseError('이메일 또는 비밀번호가 잘못되었습니다.')
        })
    }

    return (
        <Form
            title={'로그인'}
            getDataForm={handleLogin}
            firebaseError={firebaseError}
        />
    )
}

export default SignIn