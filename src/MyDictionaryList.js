import React, { useRef } from 'react';
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { deleteVocaFB } from './redux/modules/voca';
const MyDictionaryList = () => {
    const dictionary = useSelector((store) => store.voca.list);
    const history = useHistory();
    const dispatch = useDispatch();
    const infoRef = useRef(null);
    const topButtonRef = useRef(null);
    return (
        <DictionaryList>
            <h1 style={{ textDecoration: "underline" }}>MY DICTIONARY</h1>

            <VocaInfo ref={infoRef} >
                {dictionary.map((v, i) => {
                    return (
                        <div style={{ position: "relative" }} key={v._id}>
                            <small>단어</small>
                            <button onClick ={() => {
                                history.push("/edit/"+v._id);
                            }}>수정</button>
                            <IconButton aria-label="delete" size="small" style={{
                                position: "absolute",
                                right: "1vw",
                                borderRadius: "30px"
                            }} onClick={() => {
                                dispatch(deleteVocaFB(v._id))
                            }}><DeleteIcon fontSize="small" />
                            </IconButton>
                            {/* <Button onClick = {() => {
                            dispatch(deleteVocaFB(v._id))
                        }}/> */}
                            <p>{dictionary[i].voca}</p>
                            <hr />
                            <small>설명</small>
                            <p>{dictionary[i].description}</p>
                            <hr />
                            <small>예시</small>
                            <p style={{ color: "blue" }}>{dictionary[i].example}</p>
                        </div>);
                })}
                {dictionary.length>=3 && (
                    <ArrowDropUpIcon className="hoverButton" style={{
                        fontSize: "30px",
                        position: "absolute",
                        right: "1vw",
                        bottom: "8vh",
                        marginRight: "0px",

                    }} ref={topButtonRef} onClick={() => {
                        infoRef.current.scrollTo(0, 0);
                    }}>
                    </ArrowDropUpIcon>
                )}

            </VocaInfo>
        </DictionaryList>
    );
};
const DictionaryList = styled.div`
    
    width : 350px;
    height: 100vh;
    max-height : 77vh;
    flex-direction: column;
    position : relative;
`;

const VocaInfo = styled.div`
    padding : 5px;
    margin : 8px auto;
    height : 60vh;
    overflow-x: hidden;
    overflow : auto;
    display : flex;
    flex-direction : column;
    
    & small{
        font-size : 5px;
        text-decoration : underline;
    }
    & hr{
        margin : 2px;
        border-top:1px dotted #eee; 
    }
    & div {
        padding : 10px;
        border : solid 1px #ddd;
        border-radius : 30px;
        background : #fff;
        margin: 0px 0px 10px 0px;
        word-break:break-all;
    }
    & > ArrowDropUpIcon {
        background : none;
        border : none;
        font-size:30px;
        display : flex;
        position : absolute;
        right : 1vw;
        bottom :8vh;
        margin-right : 0px;
        &:hover {
            color : #aaa;
        }
        
    }
    .hoverButton {
        & : hover {
            color : #aaa;
        }
        display : flex;
    }
`;

export default MyDictionaryList;