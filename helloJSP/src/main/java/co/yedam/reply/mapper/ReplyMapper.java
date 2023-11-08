package co.yedam.reply.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import co.yedam.reply.service.ReplyVO;

public interface ReplyMapper {
	//DAO, mapper : select insert update delete같이 db에서 쓰는 용어 써주고
	//service에서 add edit 이런 거 써주기
	public List<ReplyVO> replyList(@Param("boardNo") int boardNo, @Param("page") int page); //목록
	public ReplyVO selectReply(int replyNo); //단건조회
	public int insertReply(ReplyVO vo); //등록
	public int updateReply(ReplyVO vo); //수정
	public int deleteReply(int replyNo); //삭제
	
	public int getTotalCnt(int boardNo);
	public List<Map<String, Object>> getReplyCountByWriter();
}
