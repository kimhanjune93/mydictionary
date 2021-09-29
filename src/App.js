import React,{useEffect} from 'react';
import styled from 'styled-components';
import { Switch, Route, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import './App.css';

import MyDictionaryList from './MyDictionaryList';
import AddVoca from './AddVoca';
import { loadVocaFB } from "./redux/modules/voca";
import Edit from "./Edit"

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("유즈이펙트");
    dispatch(loadVocaFB());
  },[]);
  return (
    <div style={{width : "100vw", height : "100vh"}}>
      <Container>
        <Switch>
          <Route path="/" exact>
            <MyDictionaryList />
            <button onClick={() => {
              history.push("/add");
            }}>단어추가</button>
          </Route>
          <Route path="/add">
            <AddVoca />
          </Route>
          <Route path="/edit/:id">
            <Edit/>
          </Route>
        </Switch>
      </Container>
    </div>
  );
}
const Container = styled.div`
display: flex;
flex-direction : column;
align-items : center;
justify-content : center;
  max-width: 350px;
  min-height: 80vh;
  margin: auto;
  border: 1px solid #ddd;
  border-radius : 40px;
  background : #E2C2B9;
  padding : 15px;

  & > button {
    display : block;
    margin : auto;
    padding : 10px 30px 10px 30px;
    background : #F1F7E7;
    border-radius :30px;
};
`;


export default App;
