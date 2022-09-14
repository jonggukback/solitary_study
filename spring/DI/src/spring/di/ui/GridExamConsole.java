package spring.di.ui;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import spring.di.entity.Exam;

@Component("console")
public class GridExamConsole implements ExamConsole {
	
	@Autowired(required = false)
	@Qualifier("exam")
	private Exam exam;
	
	public GridExamConsole() {}
	
	// Construction Injection - 생성자 주입

	public GridExamConsole (Exam exam) {
		this.exam = exam;
	}
	
	// Setter Injection - 세터 메서드 주입
	@Override
	public void setExam(Exam exam) {
		this.exam = exam;
	}
	
	@Override
	public void print() {
		if (exam == null) {
			System.err.println("required 옵션 발동");
		} else {
			System.out.println("┌─────────┬─────────┐");
			System.out.println("│  total  │   avg   │");
			System.out.println("├─────────┼─────────┤");
			 System.out.printf("│   %3d   │  %3.2f  │\n",exam.total(),exam.avg());
			System.out.println("└─────────┴─────────┘");
		}
	}
}
