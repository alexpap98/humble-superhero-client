import { useState } from "react";
import { addHero } from "../services/api";
import { toast } from "react-toastify";

function AddHero() {

    const [name, setName] = useState('')
    const [superpower, setSuperpower] = useState('')
    const [score, setScore] = useState('')

    function gotToasted(msg) {
        toast.error(msg, {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        });
    }

    function goodToast(msg) {
        toast(msg, {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        });
    }


    function submit() {
        addHero(name, superpower, score)
            .then(res => {
                goodToast("saved");
            })
            .catch(er => {
                if (typeof er) {
                    gotToasted(er)
                }
                er?.error?.forEach(err => {
                    gotToasted(err.message || 'something went wrong')
                });
            })
    }


    return (
        <div className="innerContainer" >
            <div className="addHero">
                <input onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Name" />
                <input onChange={(e) => { setSuperpower(e.target.value) }} type="text" placeholder="Superpower" />
                <input onChange={(e) => { setScore(e.target.value) }} type="text" placeholder="Humility score" />
                <div className="button"> <span onClick={submit}>submit</span> </div>
            </div>
        </div>
    );
}

export default AddHero;
