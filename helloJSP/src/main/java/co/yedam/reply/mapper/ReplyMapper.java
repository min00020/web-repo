package co.yedam.reply.mapper;

import java.util.List;

import co.yedam.reply.service.ReplyVO;

public interface ReplyMapper {
	//DAO, mapper : select insert update delete같이 db에서 쓰는 용어 써주고
	//service에서 add edit 이런 거 써주기
	public List<ReplyVO> replyList(int boardNo); //목록
	public ReplyVO selectReply(int replyNo); //단건조회
	public int insertReply(ReplyVO vo); //등록
	public int updateReply(ReplyVO vo); //수정
	public int deleteReply(int replyNo); //삭제
	
}
