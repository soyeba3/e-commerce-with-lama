import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategorieItem from "./CategorieItem";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: center;
    ${mobile({ padding: "0px", flexDirection:"column" })}
`

const Categories = () => {
    return (
        <Container>
            {
                categories.map((item) => {
                   return <CategorieItem key={item.id} item= {item} />
                })
            }
        </Container>
    );
};

export default Categories;