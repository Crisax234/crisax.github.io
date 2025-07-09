import React from "react";

const Estado = () => {

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Presupuesto</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td> 1 </td>
                    <td> A </td>
                    <td> $10000 </td>
                    <td> BMW </td>
                    <td> AX201 </td>
                </tr>
                <tr>
                    <td> 2 </td>
                    <td> B </td>
                    <td> $34000 </td>
                    <td> Toyota </td>
                    <td> MM303 </td>
                </tr>
                </tbody>
            </table>
        </div>
        
    )
}


export default Estado;