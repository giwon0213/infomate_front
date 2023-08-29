
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./layouts/Layout";
import BoardMain from "./pages/board/BoardMain";
import Mail from "./pages/mail/Mail";
import AddressBook from "./pages/addressBook/AddressBook";
import AddContact from "./pages/addressBook/AddContact";
import MailWrite from "./pages/mail/MailWrite";
import ApprovalMain from "./pages/approval/ApprovalMain";
import MyDocList from "./pages/approval/MyDocList";
import CalendarManegeLayout from "./layouts/CalendarManageLayout";
import MyCalendar from './pages/calendar/management/MyCalendar';
import FavoriteCalendarLayout from "./layouts/FavoriteCalendarLayout";
import ScheduleDetailCreate from "./pages/calendar/ScheduleDetailCreate";
import ReminderList from './components/calendar/dashboard/ReminderList';
import DocumentMain from "./pages/approval/DocumentMain";
import Group from './pages/manage/Group';
import SearchDept from './pages/manage/SearchDept';
import './layouts/Default.css';
import CalendarLayout from './layouts/CalendarLayout';
import Calendar from './pages/calendar/Calendar';
import FavoriteCalendarFollowing from './pages/calendar/management/FavoriteCalendarFollowing';
import FavoriteCalendarPublic from './pages/calendar/management/FavoriteCalendarPublic';
import FavoriteCalendarFollower from './pages/calendar/management/FavoriteCalendarFollower';
import MemberInfo from './pages/manage/MemberInfo';
import ChartModal from './pages/manage/ChartModal';
import Work from "./pages/work/Work";
import WkAdmin from "./pages/work/WkAdmin";
import MyWork from "./pages/work/MyWork";
import MyDept from "./pages/work/MyDept";
import Dept from "./pages/work/Dept";
import Notice from "./pages/board/Notice";
import Report from "./pages/board/Report";
import Menu from "./pages/board/Menu";
import Common from "./pages/board/Common";
import BrdDept from "./pages/board/BrdDept";
import BrdAdmin from "./pages/board/BrdAdmin";
import Anony from "./pages/board/Anony";
import NewPost from "./pages/board/NewPost";
import DocumentDetail from "./components/approval/ele-component/document/detail/DocumentDetail";

function App() {
  return (


    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/addressBook" element={<AddressBook />} />
            <Route path="/addContact" element={<AddContact />} />
            {/* <Route path="/mailWrite" element={<MailWrite />} /> */}
            <Route path="/mail" element={<Mail />} />
            {/* <Route path="/board" element={<BoardMain />}></Route> */}



            <Route path="approval">
              <Route index element={<ApprovalMain/>}/>
              <Route path="mylist" element={<MyDocList title='기안문서'/>}/> {/*내 기안 리스트*/}
              <Route path="reflist" element={<MyDocList title='참조문서'/>}/> {/*참조문서리스트*/}
              <Route path="temp" element={<MyDocList title='임시저장문서'/>} /> {/*임시저장문서리스트*/}
              <Route path="approving" element={<MyDocList title='결재대기문서'/>}/> {/*결재 대기문서리스트*/}
              <Route path="document">
                <Route path="new" element={<DocumentMain/>}/>
                <Route path=":documentId" element={<DocumentDetail/>}/> {/* 문서 조회 */}
              </Route>
            </Route>


            <Route path="calendar" element={<CalendarLayout />}>
              <Route index element={<Calendar/>}/>
              <Route path="reminder" element={<ReminderList />} />
              <Route path="regist" element={<ScheduleDetailCreate/>} />
                <Route path="management" element={<CalendarManegeLayout/>}>
                <Route index element={<MyCalendar />}/>
                <Route path="myPage" element={<MyCalendar />}/>
                <Route path="favorite">
                  <Route index element={<FavoriteCalendarLayout />} />
                  <Route path="following" element={<FavoriteCalendarFollowing />} />
                  <Route path="follower" element={<FavoriteCalendarFollower />} />
                  <Route path="public" element={<FavoriteCalendarPublic />} />
                </Route>
              </Route>
            </Route>



            <Route path='group'>
              <Route index element={<Group/>}/>
            </Route>

            <Route path='/searchDept' element={<SearchDept/>}/>

            <Route path="/work" element={ <Work />}/>
            <Route path="/work/admin" element={ <WkAdmin /> }/>
            <Route path="/work/mywork" element={ <MyWork /> }/>
            <Route path="/work/mydept" element={ <MyDept />}/>
            <Route path="/work/dept" element={ <Dept />}/>



            <Route path="/board" element={<BoardMain/>}/>
            <Route path="/board/notice" element={ <Notice />}/>
            <Route path="/board/newpost" element={ <NewPost />}/>
            <Route path="/board/report" element={ <Report />}/>
            <Route path="/board/menu" element={ <Menu />}/>
            <Route path="/board/common" element={ <Common />}/>
            <Route path="/board/brddept" element={ <BrdDept />}/>
            <Route path="/board/brdadmin" element={ <BrdAdmin />}/>
            <Route path="/board/anony" element={ <Anony />}/>
            {/* <Route path="/board" element={<BoardMain/>}></Route> */}

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;