package spring.di.ui;

import spring.di.entity.Exam;

public class InlineExamConsole implements ExamConsole {

	private Exam exam;
	
	public InlineExamConsole() {}
	
	// Construction Injection - 생성자 주입
	public InlineExamConsole(Exam exam) {
		this.exam = exam;
	}
	
	// Setter Injection - 세터 메서드 주입
	@Override
	public void setExam(Exam exam) {
		// TODO Auto-generated method stub
		
	}
	
	@Override
	public void print() {
		System.out.printf("total is %d, avg is %f", exam.total(), exam.avg());
	}
}
