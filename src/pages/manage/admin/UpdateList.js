import  { React, useState } from "react";
import UpdateCss from './UpdateList.module.css';







function UpdateList({deptItems:{deptCode, deptName}}){      // 일단 리스트 뽑아와봐

    

    return(
        <>
            <tr className={`tr ${UpdateCss.tr}`}>
                <td>{deptCode}</td>
                <td>{deptName}</td>
                {/* <td>30</td> */}
                <td><button>수정하기</button></td>
            </tr>
        </>
    )
}



export default UpdateList;