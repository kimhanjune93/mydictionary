import React from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";

import {useHistory} from "react-router-dom";
import {addVocaFB} from "./redux/modules/voca";

const AddVoca = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const voca = React.useRef(null);
    const desc = React.useRef(null);
    const exp = React.useRef(null);

    return (
        <VocaInfoTab>
            <h1 style={{textDecoration:"underline"}}>단어 추가하기</h1>
            <AddVocaInfo>
                <div>
                    <small>단어</small>
                    <input ref={voca}/>
                </div>
                <div>
                    <small>설명</small>
                    <input ref={desc}/>
                </div>
                <div>
                    <small>예시</small>
                    <input ref={exp}/>
                </div>
                <button onClick ={() => {
                    dispatch(addVocaFB({voca : voca.current.value, description: desc.current.value, example: exp.current.value}));
                    history.goBack();
                }}>추가하기</button>
            </AddVocaInfo>
        </VocaInfoTab>
    );
};
const VocaInfoTab = styled.div`
    
    width : 350px;
    height: 100vh;
    max-height : 77vh;
    flex-direction: column;
`;
const AddVocaInfo = styled.div`
    background : #fff;
    border : solid 1px #ddd;
    border-radius : 30px;
    padding : 5px;
    margin : 8px;
    height : 60vh;
    overflow-x: hidden;
    overflow : scroll;
    & small{
        font-size : 5px;
        text-decoration : underline;
        margin-bottom : 5px;
    }
    & hr{
        margin : 2px;
        border-top:1px dotted #eee; 
    }
    & div {
        padding : 10px;
        display : flex;
        flex-direction : column;
        border-radius : 30px;
        background : #fff;
        margin: 0px 0px 10px 0px;
    }
    & input {
        padding : 15px;
        border-radius : 30px;
    }
    & button {
        display : block;
        margin : auto;
        padding : 10px 30px 10px 30px;
        border-radius : 30px;
        background : #F1F7E7;
        font-size : 20px;
    }
`;
export default AddVoca;