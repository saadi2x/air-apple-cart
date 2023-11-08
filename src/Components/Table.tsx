import React, {useMemo} from "react";
import {useTable, useSortBy, usePagination, Column, UseTableOptions } from "react-table";
import {MYCOLUMNS} from "./Columns";
import MockData from "./MOCK_DATA.json";





export default function Table(){

    interface MyTableData {
        avatar: string;
        first_name: string;
        last_name: string;
        email: string;
        phone_number: string;
        signup_date: string;
        amount: number;
        status: string
       }
    

 /* const columns = useMemo(() => mycolumns, []);  */
    const columns = useMemo<Column<MyTableData>[]>(() => MYCOLUMNS, [])
    const data = useMemo(() => MockData, [])


    const {

        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        prepareRow

            } = useTable({columns, data}, useSortBy, usePagination)


    return(

        <div className="table-container">

            <table {...getTableProps()}> 
                
                <thead className="table-header"> 
                    {headerGroups.map((hGrp) => (
                        <tr{...hGrp.getHeaderGroupProps()}>
                            {hGrp.headers.map((col) => (
                                <th{...col.getHeaderProps(col.getSortByToggleProps())}>
                                    {col.render('Header')}
                                </th>
                                )
                            )}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return(
                                        <td {...cell.getCellProps}>
                                            {cell.render('Cell')}
                                        </td>
                                           )
                                })}
                            </tr>
                            )
                    })} 
                </tbody>
            </table>


            <div>
                <button onClick={()=>previousPage()}><img src="../Images/arrow-square-left-outline.svg"></img></button>
                <button onClick={()=>nextPage()}><img src="../Images/arrow-square-right-outline.svg"></img></button>
            </div>
            
        </div>
    )
}