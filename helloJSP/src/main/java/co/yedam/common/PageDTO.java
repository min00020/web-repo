package co.yedam.common;

public class PageDTO {

	int total; //전체건수
	int currentPage; //현재페이지
	boolean next, prev; //이전, 이후
	int startPage, endPage;
	int boardNo;
	
//51page 51page ~52page / 전체 258건이라면> 52페이지
	public PageDTO(int boardNo, int total, int currentPage) {
		
		int realEnd = (int) Math.ceil(total / 5.0);

		this.boardNo = boardNo;
		this.total = total;
		this.currentPage = currentPage;

		this.endPage =(int) Math.ceil(currentPage/10.0) * 10;
		this.startPage = this.endPage - 9;
		
		this.endPage = this.endPage > realEnd ? realEnd : this.endPage;
		
		this.prev = this.startPage > 1;
		this.next = this.endPage < realEnd;
	}
	
	
	
}
