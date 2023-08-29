import React, {useEffect, useState} from 'react';
import style from '../../components/common/main.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getApprovalList, getCreditList, getRefList} from "../../apis/DocumentAPICalls";
import ToolbarApprovalTable from "../../components/approval/ele-component/table/toolbarApprovalTable";
import {useSearchParams} from "react-router-dom";

function MyDocList({title}) {

  /*여기서 url에 따라 다른 fetch가 일어나게하고
  * ToolbarApprovalTable에 넘어온 값을 넘겨주자 */
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') ?? 0 ;
  const filter = searchParams.get('status');
  const document = useSelector(state => state.documentsReducer);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(page);

    useEffect(() => {
      setCurrentPage(page);
      dispatchData();
    }, [title, page, filter]);


  const dispatchData = () => {
    console.log(filter)

     if (title === '기안문서') {
        dispatch(getApprovalList({ memberCode: 2, page: page, filter: filter }));
     } else if (title === '임시저장문서') {

     } else if (title === '참조문서') {
        dispatch(getRefList({ memberCode: 2, page: page, filter: filter }));
     } else if (title === '결재대기문서') {
        dispatch(getCreditList({ memberCode: 2, page: currentPage}))
     } else if (title === '결재완료문서') {
       // Handle other cases if needed
     }

  };

  return (
    <>
      <div className={style.maintitle}>
        <h2>
          {title}
        </h2>
      </div>
      <ToolbarApprovalTable documentData={document} pageHandler={setCurrentPage} title={title} page={currentPage} filter={filter}/>
    </>
  );
}



export default MyDocList;

