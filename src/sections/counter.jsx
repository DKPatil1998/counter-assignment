import React, { useState } from 'react'
import styled from 'styled-components';

const CounterScreen = () => {
    const [countervalue,setCountervalue]=useState(0);
    /**
     * function used to make changes (incremental or decremental)
     * @param {*} type 
     */
    const makeChanges=(type)=>{
        switch(type){
            case "Increment":
                setCountervalue((prev)=>prev+1);
                break;
            case "Decrement":
                setCountervalue((prev)=>(prev!==0 && prev-1) || 0);
                break;
            default:
                break;
        }
    }
  return (
    <>
    <p>This is a basic counter which functions to increment or decrement value</p>
    <Container>
        <div className='counter-showing--space'>
            <h3>{countervalue}</h3>
        </div>
        <div className='buttons-showing--space'>
            <button value={'Increment'} onClick={()=>makeChanges('Increment')} >Increment +</button>
            <button value={'Decrement'} onClick={()=>makeChanges('Decrement')}>Decrement -</button>
        </div>
    </Container>
    </>
  )
}

export default CounterScreen;

const Container=styled.section`
    min-height: 100vh;
    border: 1px solid black;
    display: flex;
    flex-direction: column;

    div{
        flex: 1;
    }
    .counter-showing--space{
        padding: 1%;
        display: grid;
        place-items: center;

        h3{
            font-size: 5rem;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        }
        box-shadow: 0px 0px 5px gray;
    }
    .buttons-showing--space{
        display:flex;
        justify-content: center;
        gap:4%;
        align-items: start;
        padding: 3%;

        button{
            padding: 2vh;
            font-size: large;
            border-radius: 24px;
            border: none;
            background-color: palegoldenrod;
            cursor: pointer;
            box-shadow: 1px 2px 4px goldenrod;
        }
    }
`