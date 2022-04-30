import React from 'react';



export type UserType ={
    _id?: string,
    name : {
        firstName : string,
        SecondName : string
    },
    imageUrl : string

}

export type UserBlock = {
    user : UserType
}

export type ProductType ={
    id : number,
    name : string,
    rating : {
        rate : number,
        count : number
    },
    image : string,
    description : string,
};

export type ProductCardProps = {
    product : ProductType,
    onClick : React.MouseEvent
}

export type ProductReview = {
    product : ProductType
}

export type ProductListProps = {
    product : ProductType[]
}

export type Ratings = {
    rating : number,
    Count : number,
    price : number
}

export type NavbarContainerProps = {
    children : React.ReactNode
}

export type SearchBarProps = {
    SearchString : string, //
    productList : ProductType[], 
    Found : boolean,
    handleQueryChange : (e : React.ChangeEvent<HTMLInputElement>) => void
}

export type LayoutProps = {
    children  : React.ReactNode
}