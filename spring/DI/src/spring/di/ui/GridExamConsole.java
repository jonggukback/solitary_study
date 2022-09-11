package spring.di.ui;

import spring.di.entity.Exam;

public class GridExamConsole implements ExamConsole {

	private Exam exam;
	
	public GridExamConsole() {}
	
	// Construction Injection - 생성자 주입
	public GridExamConsole(Exam exam) {
		this.exam = exam;
	}
	
	// Setter Injection - 세터 메서드 주입
	@Override
	public void setExam(Exam exam) {
		this.exam = exam;
	}
	
	@Override
	public void print() {
		System.out.println("┌─────────┬─────────┐");
		System.out.println("│  total  │   avg   │");
		System.out.println("├─────────┼─────────┤");
		 System.out.printf("│   %3d   │  %3.2f  │\n",exam.total(),exam.avg());
		System.out.println("└─────────┴─────────┘");
	}
}
