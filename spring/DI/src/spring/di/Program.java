package spring.di;

import spring.di.entity.Exam;
import spring.di.entity.NewlecExam;
import spring.di.ui.ExamConsole;
import spring.di.ui.GridExamConsole;
import spring.di.ui.InlineExamConsole;

public class Program {
	
	public static void main(String[] args) {
		Program main = new Program();
		//main.Injection();
		main.SpringInjection();
	}
	
	// 스프링이 주입
	public void SpringInjection() {
		
		Exam exam = new NewlecExam();
		ExamConsole console = new GridExamConsole();
		console.setExam(exam);
		
		console.print();
	}
	
	// 직접 주입
	public void Injection() {
		Exam exam = new NewlecExam();
		
		// Construction Injection - 생성자 주입
		ExamConsole console = new InlineExamConsole(exam);
		console.print();
		
		// Setter Injection - 세터 메서드 주입
		ExamConsole console2 = new GridExamConsole();
		console2.setExam(exam);
		console2.print();
	}
}
