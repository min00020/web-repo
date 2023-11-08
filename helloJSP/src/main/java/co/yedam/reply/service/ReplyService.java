package co.yedam.reply.service;

import java.util.List;

public interface ReplyService {
	//목록, 단건조회, 추가, 수정, 삭제
		public List<ReplyVO> replyList(int boardNo, int page);
		public ReplyVO getReply(int replyNo);
		public boolean addReply(ReplyVO vo);
		public boolean editReply(ReplyVO vo);
		public boolean removeReply(int replyNo);
		
	//댓글 건수
		public int getTotalCnt(int boardNo);
}
