package co.yedam.common;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.reply.mapper.ReplyMapper;
import co.yedam.reply.service.ReplyVO;

public class MainExe {
	public static void main(String[] args) {

		SqlSession session = DataSourceMybatis.getInstance().openSession(true);//true자동커밋
		ReplyMapper mapper = session.getMapper(ReplyMapper.class);
		
		
		mapper.replyList(1, 3).forEach(rep->System.out.println(rep));
		
//		List<ReplyVO> list = mapper.replyList(1,1);
//		list.forEach(vo -> System.out.println(vo));
		
//		ReplyVO vo = new ReplyVO();
//		vo.setBoardNo(1);
//		vo.setReply("메인");
//		vo.setReplyer("메인");
		
		//mapper.insertReply(vo);
		//mapper.deleteReply(8);
		
//-------------------------------------------------------------
		// 학생 아이디, 비밀번호, 이름, 학과, 생일
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//		StudentVO vo = new StudentVO();
//		
//		vo.setStudentId("newbie");
//		vo.setStudentName("신입생");
//		vo.setStudentPassword("1234");
//		vo.setStudentDept("영문학과");
//		try {
//			vo.setStudentBirthday(sdf.parse("2001-01-01"));
//		} catch (ParseException e) {
//			e.printStackTrace();
//		}
//-----------------------------------------------

//		BoardVO vo = new BoardVO();
//		BoardDAO dao = new BoardDAO();
//		
//		System.out.println(dao.selectList()); //selectList 나오는지 테스트
//
//		vo.setTitle("test");
//		vo.setWriter("user03");
//		vo.setContent("content_modify");
//		vo.setBoardNo(5);
//
//		BoardService svc = new BoardServiceImpl();
//		if (dao.update(vo) == 1) {
//			System.out.println("정상등록");
//
//		} else {
//			System.out.println("에러발생");
//			System.out.println(vo);
//		}
//
	}

}
