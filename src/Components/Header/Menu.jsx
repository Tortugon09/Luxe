
import {Link} from "react-router-dom";
import styled, { css } from 'styled-components'
import {useContext, useEffect, useState} from "react";
import {GeneralContext} from "../GeneralContext.jsx";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown.js";
import axios from "axios";


export function Menu({back}) {
    const MenuBody = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5%;
  padding-right: 2% ;
  padding-left: 2%;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  background: ${back};
      z-index: 1;
  
  h1{
    a{
      font-family: 'Playfair Display', serif;
      font-style: normal;
      font-weight: 400;
      font-size: 76px;
      line-height: 115px;
      color: #FFFFFF;
      text-decoration: none;
      background: none;
      transition: all 0.3s ease;
      &:hover{
        font-size: 106px;
        color: firebrick;
      }
    }
  }
  .menu {
    width: 25%;
    @media (max-width: 460px) {
      width: 50%;
    }
    transition: all 0.5s ease;
    span {
      text-decoration: none;
      font-family: 'Oswald';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      color: #FFFFFF;
      background: #1D1D1D;
      padding: 1%;
      transition: all 0.3s ease;
      &:hover{
        font-size: 28px;
      }
    }
    transition: all 0.5s ease;
    ul {
      margin-top: 5px;
      width: 5%;
      display: flex;
      position: absolute;
      overflow: hidden;
      flex-direction: column;
      height: ${(props) => (props.OpenS ? '100%' : '0%')};
      li {
        width: 100%;
        list-style: none;
        transition: all 0.3s ease;
        a{
          background: none;
          color: black;
          transition: all 0.3s ease;
        }
      }
    }
  }
  a{
    text-decoration: none;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #FFFFFF;
    background: #1D1D1D;
    padding: 1%;
    transition: all 0.3s ease;
    &:hover{
      font-size: 28px;
    }
  }
`
const {
        setLoginUser,
    setUserSesion,
    setToken,cartItems,} = useContext(GeneralContext)
    const [productsLength, setProductsLength] = useState(0)

    useEffect(() => {
        setProductsLength(
            cartItems.reduce((previous, current) => previous + current.amount, 0)
        );
    }, [cartItems]);

    const [Select, SetSelect] = useState(false)
    const [OpenS, SetOpenS] = useState(false)
    const handleChange = (value) => {
        SetSelect(value)
        SetOpenS(!OpenS)
    }
    const [item, setItems] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        await axios
            .get("http://localhost:8080/product/list")
            .then(({ data }) => setItems(data.data));

    };
    console.log(item)
    const uniqueSections = [...new Set(item.map(data => data.type))];
    console.log(uniqueSections)


    return (
        <>
            <MenuBody OpenS={OpenS}>
              <h1 className="title"><Link to={"/Home"}>LuxeStreet</Link> </h1>
              <div className="menu">
                  {!Select ? <span onClick={() => SetOpenS(!OpenS)}>Todos <ArrowDropDownIcon/></span> : <span onClick={() => SetOpenS(!OpenS)}>{Select}</span>}
                  <ul>
                      {uniqueSections.map((value)=>(
                          <li onClick={() => handleChange(value)}><Link to={`/${value}`}>{value}</Link></li>
                      ))}
                  </ul>
              </div>
                <Link to={"/"} onClick={() => {
                    setUserSesion([])
                    setLoginUser(false)
                    setToken("")}}>Cerrar Sesion</Link>
                <Link to={"/shopping"}>Carrito de compras {productsLength}</Link>
            </MenuBody>

        </>
    )
}