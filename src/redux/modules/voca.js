// voca.js
import {getDocs, addDoc, collection, deleteDoc,doc, setDoc} from "firebase/firestore";
import {db} from "../../firebase";
// Actions
const LOAD = 'voca/LOAD';

const initialState = {
    list : []
};
// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case LOAD : {
            return {list : action.voca_list};
        }
        default: return state;
    }
}

export const loadVocaFB = () => {
    return async function(dispatch) {
        const docRef = await getDocs(collection(db, "dictionary"));
        
        let voca_list=[];
        docRef.forEach((v)=> {
            voca_list.push({...v.data(),_id:v.id});
        })
        voca_list.sort((a,b)=>a.voca.localeCompare(b.voca));
        dispatch(loadVoca(voca_list));
    }
}

export const addVocaFB=(voca_list) => {
    return async function(dispatch) {
        await addDoc(collection(db,"dictionary"),voca_list);
        dispatch(loadVocaFB());
    };
}

export const editVocaFB=(edit_list, key) => {
    console.log(key);
    console.log(edit_list);
    return async function(dispatch) {
        await setDoc(doc(db,"dictionary",key), edit_list);
        dispatch(loadVocaFB());
    };
}

export const deleteVocaFB=(key) => {
    return async function(dispatch) {
        await deleteDoc(doc(db,"dictionary",key));
        dispatch(loadVocaFB());
    };
}


// Action Creators
export function loadVoca(voca_list) {
    return {type : LOAD, voca_list};
}